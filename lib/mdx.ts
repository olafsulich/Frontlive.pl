import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import remarkAutoLinkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';
import remarkCodeTitles from 'remark-code-titles';
import mdxPrism from 'mdx-prism';
import readingTime from 'reading-time';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'content/posts');
const MDX_PATTERN = /\.mdx?$/;

export function getPostsSlugs() {
  return fs.readdirSync(POSTS_PATH).filter((path) => MDX_PATTERN.test(path));
}

type Frontmatter = {
  title: string;
  publishedAt: string;
  excerpt: string;
};

async function transformMdx(content: string, frontmatter: Frontmatter) {
  return await renderToString(content, {
    mdxOptions: {
      remarkPlugins: [remarkAutoLinkHeadings, remarkSlug, remarkCodeTitles],
      rehypePlugins: [mdxPrism],
    },
    scope: frontmatter,
  });
}

export async function getPostBySlug(slug: string) {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data: frontmatter } = matter(source);
  const transformedMdx = await transformMdx(content, frontmatter as Frontmatter);
  //   const hydratedMdx = await hydrate(transformedMdx);
  return { transformedMdx, frontmatter };
}

export function getPostsPaths() {
  const postsSlugs = getPostsSlugs();
  const postsPaths = postsSlugs
    .map((path) => path.replace(MDX_PATTERN, ''))
    .map((slug) => ({ params: { slug } }));
  return postsPaths;
}

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

const paths = postFilePaths
  // Remove file extensions for page paths
  .map((path: string) => path.replace(/\.mdx?$/, ''))
  // Map the path into the static paths object required by Next.js
  .map((slug: string) => ({ params: { slug } }));

const postFilePath = path.join(POSTS_PATH, `a.mdx`);
