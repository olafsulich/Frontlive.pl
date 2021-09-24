import { GistWithContent, GistWithoutContent } from '../types/types';

export const getSnippets = async () => {
  const gists = await fetch('https://api.github.com/users/olafsulich/gists');
  const gistsData = (await gists.json()) as GistWithoutContent[];

  const snippets = await Promise.all(
    gistsData.map(async (gist) => {
      const gistsWithContent = await fetch(`https://api.github.com/gists/${gist.id}`);
      const {
        git_pull_url,
        id,
        created_at: createdAt,
        files: rawFiles,
        description,
      }: GistWithContent = await gistsWithContent.json();
      const { content, language, filename } = rawFiles[Object.keys(rawFiles)[0]];

      return {
        url: git_pull_url,
        id,
        createdAt,
        content,
        filename,
        language,
        description,
      };
    }),
  );

  return snippets;
};
