import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import slugify from 'slugify';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { transformMdx } from './mdx';

dayjs.extend(customParseFormat);
const POSTS_PATH = path.join(process.cwd(), 'content/posts');
const MDX_PATTERN = /\.mdx?$/;

export function getPostsSlugs() {
  return fs.readdirSync(POSTS_PATH).filter((path) => MDX_PATTERN.test(path));
}

export type PostFrontmatter = {
  title: string;
  category: string;
  publishedAt: string;
  excerpt: string;
  popular: boolean;
  isPublished: boolean;
};

type Post = {
  title: string;
  category: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  popular: boolean;
  isPublished: boolean;
};

export const getPostBySlug = async (slug: string) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data: frontmatter } = matter(source);
  const transformedMdx = await transformMdx(content, frontmatter as PostFrontmatter);
  return { transformedMdx, frontmatter };
};

const filterUnpublishedPosts = (posts: Post[]) => posts.filter((post) => post.isPublished);

export const sortPostsByNewest = (posts: Post[]) => {
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
      const { title, category, excerpt, publishedAt, popular, isPublished } = frontmatter;

      return {
        slug,
        title,
        category,
        excerpt,
        publishedAt,
        popular,
        isPublished,
      };
    },
  );

  const filteredPosts = filterUnpublishedPosts(allPosts);
  const sortedPosts = sortPostsByNewest(filteredPosts);

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
