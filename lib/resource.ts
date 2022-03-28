import fs from 'fs';
import path from 'path';
import { loadMDX } from './mdx';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkSlug from 'remark-slug';
import remarkCodeTitles from 'remark-code-titles';
import mdxPrism from 'mdx-prism';
import readingTime from 'reading-time';

const MDX_PATTERN = /\.mdx?$/;

const getResourcesSlugs = (resourcePath: string) => {
  return fs.readdirSync(resourcePath).filter((path) => MDX_PATTERN.test(path));
};

export const getResourceFrontmatter = async <T extends any>({
  filename,
  resourcePath,
}: {
  readonly filename: string;
  readonly resourcePath: string;
}): Promise<T> => {
  const slug = filename.replace(MDX_PATTERN, '');
  const fullPath = path.join(resourcePath, filename);
  const source = fs.readFileSync(fullPath, 'utf8');
  const { frontmatter } = await loadMDX(source);
  return frontmatter as T;
};

export const getAllResources = <T extends any>(resourcePath: string) => {
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
  const source = fs.readFileSync(postFilePath, 'utf8');

  const { code, frontmatter } = await loadMDX(source);

  return { code, frontmatter };
};

export const getResourcesPaths = (resourcePath: string) => {
  const resourcesSlugs = getResourcesSlugs(resourcePath);
  const resourcesPaths = resourcesSlugs
    .map((path) => path.replace(MDX_PATTERN, ''))
    .map((slug) => ({ params: { slug } }));
  return resourcesPaths;
};
