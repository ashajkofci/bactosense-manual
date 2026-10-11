// Route explicit JSX images through the same zoom/base-path component as Markdown images.
module.exports = function manualImages() {
  return tree => {
    const imports = new Map();
    function visit(node) {
      if ((node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') && node.name === 'img') {
        node.name = 'ManualImage';
        imports.set('ManualImage', '@theme/MDXComponents/Img');
      }
      for (const child of node.children || []) visit(child);
    }
    visit(tree);
    for (const [name, source] of imports) tree.children.unshift({
      type: 'mdxjsEsm',
      value: `import ${name} from '${source}';`,
      data: { estree: {
        type: 'Program', sourceType: 'module', body: [{
          type: 'ImportDeclaration',
          source: { type: 'Literal', value: source, raw: `'${source}'` },
          specifiers: [{ type: 'ImportDefaultSpecifier', local: { type: 'Identifier', name } }],
        }],
      } },
    });
  };
};
