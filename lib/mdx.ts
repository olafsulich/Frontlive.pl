import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import remarkAutoLinkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';
import remarkCodeTitles from 'remark-code-titles';
import mdxPrism from 'mdx-prism';
import Sparkles from '../components/shared/components/sparkles/Sparkles';
import slugify from 'slugify';
import dayjs from 'dayjs';
import Player from '../components/mdx/player/Player';

const POSTS_PATH = path.join(process.cwd(), 'content/posts');
const MDX_PATTERN = /\.mdx?$/;

export function getPostsSlugs() {
  return fs.readdirSync(POSTS_PATH).filter((path) => MDX_PATTERN.test(path));
}

type Frontmatter = {
  title: string;
  category: string;
  publishedAt: string;
  excerpt: string;
  popular: boolean;
};

type Post = {
  title: string;
  category: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  popular: boolean;
};

export const customMdxComponents = { Sparkles: Sparkles, Player: Player };

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

const sortPostsByNewest = (posts: Post[]) => {
  return posts.sort((a, b) => {
    const dateA = dayjs(a.publishedAt, 'DD-MM-YYYY');
    const dateB = dayjs(b.publishedAt, 'DD-MM-YYYY');
    if (dateA.isBefore(dateB)) {
      return 1;
    }
    if (dateB.isBefore(dateA)) {
      return -1;
    }
    return 0;
  });
};

export const getAllPosts = () => {
  const fileNames = fs.readdirSync(POSTS_PATH);

  const allPosts = fileNames.map(
    (filename: string): Post => {
      const slug = filename.replace(MDX_PATTERN, '');
      const fullPath = path.join(POSTS_PATH, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data: frontmatter } = matter(fileContents);
      const { title, category, excerpt, publishedAt, popular } = frontmatter;

      return {
        slug,
        title,
        category,
        excerpt,
        publishedAt,
        popular,
      };
    },
  );

  const sortedPosts = sortPostsByNewest(allPosts);

  return sortedPosts;
};

export const getNewestPosts = () => {
  const posts = getAllPosts();
  return posts.slice(0, 3);
};

export const getPopularPosts = () => {
  const posts = getAllPosts();
  return posts.filter(({ popular }) => popular === true).slice(0, 3);
};

export const getPostsByCategory = (postCategory: string) => {
  const posts = getAllPosts();
  const filteredPosts = posts.filter(
    ({ category }: { category: string }) => slugify(category, { lower: true }) === postCategory,
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
