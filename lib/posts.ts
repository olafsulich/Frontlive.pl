import path from 'path';
import slugify from 'slugify';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { getResourcesPaths, getResourceBySlug, getAllResources } from './resource';

dayjs.extend(customParseFormat);

const POSTS_PATH = path.join(process.cwd(), 'content');

export const getPostBySlug = async (slug: string) => {
  const post = await getResourceBySlug(slug, POSTS_PATH);

  return post;
};

const filterUnpublishedPosts = (posts: any[]) => posts.filter((post) => post.isPublished);

export const sortPostsByNewest = (posts: any[]) => {
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
  const allPosts = getAllResources<any>(POSTS_PATH);
  const filteredPosts = filterUnpublishedPosts(allPosts);
  const sortedPosts = sortPostsByNewest(filteredPosts);

  return sortedPosts;
};

export const getNewestPosts = () => {
  const posts = getAllPosts();
  return posts.slice(0, 4);
};

export const getPostsByCategory = (postCategory: string) => {
  const posts = getAllPosts();
  const filteredPosts = posts.filter(
    ({ category }) => slugify(category, { lower: true }) === postCategory,
  );

  return filteredPosts;
};

export const getPostsPaths = () => {
  const paths = getResourcesPaths(POSTS_PATH);
  return paths;
};
