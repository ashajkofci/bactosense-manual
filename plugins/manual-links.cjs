// Root-absolute links in a manual address that manual's own pages:
//   [8.4](/general-operations-and-configurations#section-8-4)
// renders as /<manual id>/general-operations-and-configurations#section-8-4, so
// chapters keep working when a manual is served below its own route.
// Links whose first segment is another manual's id, and static files such as
// /img/… or /pdf/… (any path with a file extension), are left unchanged.
module.exports = function manualLinks({ manualId, manualIds = [] } = {}) {
  if (!manualId) throw new Error('manual-links requires the manualId option.');
  const others = new Set(manualIds);
  function rewrite(url) {
    if (typeof url !== 'string' || !url.startsWith('/') || url.startsWith('//')) return url;
    const [pathname] = url.split(/[?#]/, 1);
    const first = pathname.split('/')[1];
    if (others.has(first) || /\.[a-z0-9]+$/i.test(pathname)) return url;
    return `/${manualId}${url}`;
  }
  return tree => {
    function visit(node) {
      if (node.type === 'link' || node.type === 'definition') node.url = rewrite(node.url);
      for (const child of node.children || []) visit(child);
    }
    visit(tree);
  };
};
