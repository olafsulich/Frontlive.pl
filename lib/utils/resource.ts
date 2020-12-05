import fs from 'fs';
import path from 'path';
import { transformMdx } from '../mdx';
import matter from 'gray-matter';
import type { PostFrontmatter, ProjectFrontmatter, Post, Project } from './types';

type ResourceFrontmatter = PostFrontmatter | ProjectFrontmatter;
type Resource = Post | Project;

const MDX_PATTERN = /\.mdx?$/;

const getResourcesSlugs = (resourcePath: string) => {
  return fs.readdirSync(resourcePath).filter((path) => MDX_PATTERN.test(path));
};

export const getResourceFrontmatter = <T extends Resource>({
  filename,
  resourcePath,
}: {
  filename: string;
  resourcePath: string;
}): T => {
  const slug = filename.replace(MDX_PATTERN, '');
  const fullPath = path.join(resourcePath, filename);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);
  const frontmatter: unknown = { ...data, slug };
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
  const frontmatter = data as ResourceFrontmatter;
  const transformedMdx = await transformMdx(content, frontmatter as ResourceFrontmatter);
  return { transformedMdx, frontmatter };
};

export const getResourcesPaths = (resourcePath: string) => {
  const resourcesSlugs = getResourcesSlugs(resourcePath);
  const resourcesPaths = resourcesSlugs
    .map((path) => path.replace(MDX_PATTERN, ''))
    .map((slug) => ({ params: { slug } }));
  return resourcesPaths;
};
