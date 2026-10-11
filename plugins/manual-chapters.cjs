// Use the same published inventory and ordering for every manual export.
module.exports = function manualChapters(allContent) {
  const version = allContent['docusaurus-plugin-content-docs']?.default?.loadedVersions
    .find(item => item.versionName === 'current');
  if (!version?.sidebars.manual) throw new Error('Manual export requires the current manual sidebar.');
  const docs = new Map(version.docs.map(doc => [doc.id, doc]));
  const ids = [];
  function collect(items) {
    for (const item of items) {
      if (item.type === 'category') collect(item.items);
      else if (item.type === 'doc') ids.push(item.id);
    }
  }
  collect(version.sidebars.manual);
  if (new Set(ids).size !== ids.length || ids.length !== docs.size) {
    throw new Error('Every published manual chapter must appear exactly once in the export sidebar order.');
  }
  return ids.map(id => {
    const doc = docs.get(id);
    if (!doc) throw new Error(`Manual chapter ${id} is missing.`);
    return { id, title: doc.title, permalink: doc.permalink };
  });
};
