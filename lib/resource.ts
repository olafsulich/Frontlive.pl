import fs from 'fs';
import path from 'path';
import { transformMdx } from './mdx';
import matter from 'gray-matter';
import type { PostFrontmatter, Post } from '../types/types';
import { serialize } from 'next-mdx-remote/serialize';
import remarkSlug from 'remark-slug';
// import remarkCodeTitles from 'remark-code-titles';
import mdxPrism from 'mdx-prism';
import readingTime from 'reading-time';
import { remarkCodeTitle } from '../scripts/remark-code-title';
import remarkRehype from 'remark-rehype';

type ResourceFrontmatter = PostFrontmatter;
type Resource = Post;

const MDX_PATTERN = /\.mdx?$/;

const getResourcesSlugs = (resourcePath: string) => {
  return fs.readdirSync(resourcePath).filter((path) => MDX_PATTERN.test(path));
};

export const getResourceFrontmatter = <T extends Resource>({
  filename,
  resourcePath,
}: {
  readonly filename: string;
  readonly resourcePath: string;
}): T => {
  const slug = filename.replace(MDX_PATTERN, '');
  const fullPath = path.join(resourcePath, filename);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);
  const timeToRead = readingTime(content).minutes;

  const frontmatter: unknown = { ...data, slug, timeToRead };
  return frontmatter as T;
};

export const getAllResources = <T extends Resource>(resourcePath: string) => {
  const fileNames = fs.readdirSync(resourcePath);
  const allResources = fileNames.map((filename: string) => {
    const frontmatter = getResourceFrontmatter<T>({
      filename,
      resourcePath,
    });

    return frontmatter;
  });
  return allResources;
};

export const getResourceBySlug = async (slug: string, resourcePath: string) => {
  const postFilePath = path.join(resourcePath, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);
  const timeToRead = readingTime(content).minutes;
  const frontmatter = {
    readingTime: timeToRead,
    ...data,
  } as ResourceFrontmatter;
  const transformedMdx = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkCodeTitle],
      rehypePlugins: [mdxPrism],
    },
    scope: data,
  });

  return { transformedMdx, frontmatter };
};

export const getResourcesPaths = (resourcePath: string) => {
  const resourcesSlugs = getResourcesSlugs(resourcePath);
  const resourcesPaths = resourcesSlugs
    .map((path) => path.replace(MDX_PATTERN, ''))
    .map((slug) => ({ params: { slug } }));
  return resourcesPaths;
};
