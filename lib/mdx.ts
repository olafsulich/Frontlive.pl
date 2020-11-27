import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import remarkAutoLinkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';
import remarkCodeTitles from 'remark-code-titles';
import mdxPrism from 'mdx-prism';
import Sparkles from '../components/shared/components/sparkles/Sparkles';

const POSTS_PATH = path.join(process.cwd(), 'content/posts');
const MDX_PATTERN = /\.mdx?$/;

export function getPostsSlugs() {
  return fs.readdirSync(POSTS_PATH).filter((path) => MDX_PATTERN.test(path));
}

type Frontmatter = {
  title: string;
  category: string;
  publishedAt: string;
  summary: string;
};

type Post = {
  title: string;
  category: string;
  summary: string;
  slug: string;
};

export const customMdxComponents = { Sparkles: Sparkles };

const transformMdx = async (content: string, frontmatter: Frontmatter) => {
  return await renderToString(content, {
    components: customMdxComponents,
    mdxOptions: {
      remarkPlugins: [remarkSlug, remarkAutoLinkHeadings, remarkCodeTitles],
      rehypePlugins: [mdxPrism],
    },
    scope: frontmatter,
  });
};

export const getPostBySlug = async (slug: string) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data: frontmatter } = matter(source);
  const transformedMdx = await transformMdx(content, frontmatter as Frontmatter);
  return { transformedMdx, frontmatter };
};

export const getAllPosts = () => {
  const fileNames = fs.readdirSync(POSTS_PATH);

  const allPosts = fileNames.map(
    (filename: string): Post => {
      const slug = filename.replace(MDX_PATTERN, '');
      const fullPath = path.join(POSTS_PATH, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data: frontmatter } = matter(fileContents);
      const { title, category, summary } = frontmatter;

      return {
        slug,
        title,
        category,
        summary,
      };
    },
  );
  return allPosts;
};

export const getPostsByCategory = (postCategory: string) => {
  const posts = getAllPosts();
  const filteredPosts = posts.filter(
    ({ category }: { category: string }) => category === postCategory,
  );

  return filteredPosts;
};

export const getPostsPaths = () => {
  const postsSlugs = getPostsSlugs();
  const postsPaths = postsSlugs
    .map((path) => path.replace(MDX_PATTERN, ''))
    .map((slug) => ({ params: { slug } }));
  return postsPaths;
};
