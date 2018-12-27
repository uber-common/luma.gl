import log, {COLOR} from '../utils/log';

let tableOfContents = [];

// Patches up new markdown nodes
//
export function processNewDocsJsonNode({
  node, actions, getNode
}, docNodes) {
  traverseTableOfContents(node.chapters, docNodes, 1);
  tableOfContents = node;
  log.log('UPDATED tableOfContents',
    Object.keys(docNodes).length,
    Object.keys(tableOfContents.chapters).length,
    // JSON.stringify(tableOfContents, null, 2)
  )(); // , Object.keys(docNodes));
}

export function getTableOfContents() {
  log.log('QUERIED tableOfContents', Object.keys(tableOfContents.chapters).length)();
  // , Object.keys(docNodes));
  return tableOfContents;
}

function traverseTableOfContents(chapters, docNodes, level) {
  for (const chapter of chapters || []) {
    chapter.level = level;
    if (chapter.chapters) {
      traverseTableOfContents(chapter.chapters, docNodes, level + 1);
    }
    const entries = chapter.entries || [];
    for (const entry of chapter.entries || []) {
      processEntry(chapter, entry, docNodes);
    }
  }
}

function processEntry(chapter, entry, docNodes) {
  if (!entry.entry) {
    log.warn({color: COLOR.RED}, 'missing entry in chapter', chapter.title, entry)();
    return;
  }
  const slug = entry.entry.replace(/\.[^/.]+$/, '').replace('/README', '');
  const docNode = docNodes[slug] || null;
  if (!docNode || !docNode.id) {
    log.warn('unmatched toc entry', chapter.title, slug, docNode)();
  } else {
    entry.id = [ docNode.id ];
    entry.markdown = [ docNode.id ];
    entry.childMarkdownRemark = docNode;
    log.warn('matched toc entry',
      chapter.title, entry.entry, docNode && docNode.id)();
  }
}
