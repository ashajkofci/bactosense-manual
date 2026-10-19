// A pipe-table cell cannot hold a block, so a notice is written on one line inside it:
//   | 1. | Mount the unit. | :::caution[Wall mounting] The fixation must carry 60 kg. ::: |
// This produces the same admonition as a `:::caution[Wall mounting]` block outside tables.
// Use <br /><br /> to start another paragraph inside the notice.
module.exports = function manualTableNotices(options = {}) {
  const types = new Set(options.types || ['info', 'warning', 'danger', 'caution', 'explosion', 'gloves', 'tip', 'note']);
  const fence = /:::(?:([A-Za-z]+)\[([^\]\n]*)\])?/g;
  const isBreak = node => node.type === 'mdxJsxTextElement' && node.name === 'br';

  function trim(nodes) {
    nodes = nodes.slice();
    if (nodes[0]?.type === 'text') nodes[0] = {...nodes[0], value: nodes[0].value.trimStart()};
    const last = nodes.length - 1;
    if (nodes[last]?.type === 'text') nodes[last] = {...nodes[last], value: nodes[last].value.trimEnd()};
    return nodes.filter(node => node.type !== 'text' || node.value);
  }
  function paragraphs(nodes) {
    const result = [[]];
    for (let i = 0; i < nodes.length; i++) {
      const gap = isBreak(nodes[i]) ? (nodes[i + 1]?.type === 'text' && !nodes[i + 1].value.trim() ? i + 2 : i + 1) : -1;
      if (gap > 0 && isBreak(nodes[gap])) { result.push([]); i = gap; } else result[result.length - 1].push(nodes[i]);
    }
    return result.map(trim).filter(children => children.length).map(children => ({type: 'paragraph', children}));
  }
  function notice({type, title, children}) {
    return {
      type: 'containerDirective', name: type, attributes: {title}, children: paragraphs(children),
      data: {hName: 'admonition', hProperties: {title, type}},
    };
  }
  function convert(cell, file) {
    const result = [];
    let open = null;
    const add = node => (open ? open.children : result).push(node);
    for (const node of cell.children) {
      if (node.type !== 'text') { add(node); continue; }
      let last = 0;
      for (const match of node.value.matchAll(fence)) {
        const [token, type, title] = match;
        if (type && !open && types.has(type)) {
          if (match.index > last) add({...node, value: node.value.slice(last, match.index)});
          open = {type, title, children: []};
        } else if (!type && open) {
          if (match.index > last) add({...node, value: node.value.slice(last, match.index)});
          result.push(notice(open));
          open = null;
        } else continue;
        last = match.index + token.length;
      }
      if (last < node.value.length) add({...node, value: node.value.slice(last)});
    }
    if (open) file.fail(`Table cell notice "${open.title}" is missing its closing ":::".`, cell);
    cell.children = result;
  }
  const hasFence = cell => cell.children.some(node => node.type === 'text' && /:::[A-Za-z]+\[/.test(node.value));

  return (tree, file) => {
    function visit(node) {
      if (node.type === 'tableCell' && hasFence(node)) convert(node, file);
      for (const child of node.children || []) visit(child);
    }
    visit(tree);
  };
};
