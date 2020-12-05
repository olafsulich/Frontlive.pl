import renderToString from 'next-mdx-remote/render-to-string';
import remarkAutoLinkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';
import remarkCodeTitles from 'remark-code-titles';
import mdxPrism from 'mdx-prism';
import { Sparkles } from '../components/shared/components/sparkles/Sparkles';
import { Player } from '../components/mdx/player/Player';
import { Image } from '../components/mdx/image/Image';
import type { ProjectFrontmatter } from './projects';
import type { PostFrontmatter } from './posts';

export const customMdxComponents = { Sparkles, Player, Image };

export const transformMdx = async (
  content: string,
  frontmatter: PostFrontmatter | ProjectFrontmatter,
) => {
  return await renderToString(content, {
    components: customMdxComponents,
    mdxOptions: {
      remarkPlugins: [remarkSlug, remarkAutoLinkHeadings, remarkCodeTitles],
      rehypePlugins: [mdxPrism],
    },
    scope: frontmatter,
  });
};
