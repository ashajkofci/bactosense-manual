// Markdown pipe tables carry the manual's table layout:
// - An empty header row denotes a headerless table; it is removed from the rendered tree.
// - A cell holding only `\<` merges with the cell on its left (colSpan) and a cell holding
//   only `^` merges with the cell above (rowSpan). The merged cell is the top-left one.
// - A merged bold-only cell that spans every column is a section row and renders as a header cell.
module.exports = function manualTables() {
  const isElement = (node, name) => node.type === 'element' && (!name || node.tagName === name);
  const cellsOf = row => row.children.filter(child => isElement(child, 'td') || isElement(child, 'th'));
  const rowsOf = group => group.children.filter(child => isElement(child, 'tr'));
  function textOf(node) {
    if (node.type === 'text') return node.value;
    return (node.children || []).map(textOf).join('');
  }
  function hasContent(node) {
    if (node.type === 'text') return Boolean(node.value.trim());
    return (node.children || []).some(hasContent);
  }
  function marker(cell) {
    if (cell.children.some(child => child.type !== 'text')) return null;
    const text = textOf(cell).trim();
    return text === '<' || text === '^' ? text : null;
  }
  function isBoldOnly(cell) {
    const content = cell.children.filter(child => child.type !== 'text' || child.value.trim());
    return content.length === 1 && isElement(content[0], 'strong');
  }

  function mergeCells(table, file) {
    const groups = table.children.filter(child => isElement(child, 'thead') || isElement(child, 'tbody'));
    const rows = groups.flatMap(group => rowsOf(group).map(row => ({group, row, cells: cellsOf(row)})));
    if (!rows.some(({cells}) => cells.some(marker))) return;

    const owner = [], box = new Map();
    rows.forEach(({cells}, r) => {
      owner[r] = cells.map((cell, c) => {
        const kind = marker(cell);
        let target = cell;
        if (kind === '<') target = owner[r][c - 1];
        if (kind === '^') target = owner[r - 1]?.[c];
        if (!target) file.fail(`Table merge marker "${kind === '<' ? '\\<' : '^'}" in row ${r + 1}, column ${c + 1} has no cell to merge with.`);
        const area = box.get(target) || {r0: r, c0: c, r1: r, c1: c};
        area.r1 = Math.max(area.r1, r); area.c1 = Math.max(area.c1, c);
        box.set(target, area);
        return target;
      });
    });
    const columns = Math.max(...owner.map(cells => cells.length));
    for (const [cell, area] of box) {
      const covered = owner.flatMap(cells => cells).filter(target => target === cell).length;
      if (covered !== (area.r1 - area.r0 + 1) * (area.c1 - area.c0 + 1)) {
        file.fail(`Merged table cell "${textOf(cell).trim().slice(0, 30)}" must cover a rectangle of cells.`);
      }
      if (area.c1 > area.c0) cell.properties = {...cell.properties, colSpan: area.c1 - area.c0 + 1};
      if (area.r1 > area.r0) cell.properties = {...cell.properties, rowSpan: area.r1 - area.r0 + 1};
      if (cell.tagName === 'td' && area.c0 === 0 && area.c1 === columns - 1 && columns > 1 && isBoldOnly(cell)) cell.tagName = 'th';
    }
    for (const {row, cells} of rows) row.children = row.children.filter(child => !cells.includes(child) || !marker(child));

    // A merged cell cannot cross from the header row group into the body.
    const head = table.children.find(child => isElement(child, 'thead'));
    const headRows = head ? rowsOf(head).length : 0;
    if (head && [...box.values()].some(area => area.r0 < headRows && area.r1 >= headRows)) {
      const body = table.children.find(child => isElement(child, 'tbody'));
      body.children = [...head.children, ...body.children];
      table.children = table.children.filter(child => child !== head);
    }
  }

  return (tree, file) => {
    function visit(node) {
      if (node.tagName === 'table') {
        mergeCells(node, file);
        node.children = node.children.filter(child => child.tagName !== 'thead' || hasContent(child));
      }
      for (const child of node.children || []) visit(child);
    }
    visit(tree);
  };
};
