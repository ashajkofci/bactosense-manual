// An empty Markdown table header denotes a headerless table in this manual.
// Remove it from the rendered tree instead of changing the original table layout.
module.exports = function manualTables() {
  function hasContent(node) {
    if (node.type === 'text') return Boolean(node.value.trim());
    return (node.children || []).some(hasContent);
  }
  return tree => {
    function visit(node) {
      if (node.tagName === 'table') {
        node.children = node.children.filter(child => child.tagName !== 'thead' || hasContent(child));
      }
      for (const child of node.children || []) visit(child);
    }
    visit(tree);
  };
};
