import visit from 'unist-util-visit';

export const remarkCodeTitle = () => (tree) => {
  return visit(tree, 'code', (node) => {
    const nodeLang = node.lang || '';

    if (!nodeLang.includes(':')) {
      return;
    }

    const language = nodeLang.slice(0, nodeLang.search(':'));
    const title = nodeLang.slice(nodeLang.search(':') + 1, nodeLang.length);
    const data = node.data || (node.data = {});
    const props = data.hProperties || (data.hProperties = {});

    node.lang = language;

    data['data-title'] = title;
    props['data-title'] = title;
  });
};
