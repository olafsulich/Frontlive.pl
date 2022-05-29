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
    data['parentName'] = undefined;
    data['originalType'] = undefined;
    data['mdxType'] = undefined;
    data['parentName'] = undefined;
    data['originaltype'] = undefined;
    data['mdxtype'] = undefined;
    data['data-title'] = title;
    props['data-title'] = title;
    props['parentName'] = undefined;
    props['originalType'] = undefined;
    props['mdxType'] = undefined;
    props['parentname'] = undefined;
    props['originaltype'] = undefined;
    props['mdxtype'] = undefined;
  });
};
