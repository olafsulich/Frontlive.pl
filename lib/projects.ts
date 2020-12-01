import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { transformMdx } from './mdx';

const PROJECTS_PATH = path.join(process.cwd(), 'content/projects');
const MDX_PATTERN = /\.mdx?$/;

type Variant = 'blue' | 'green' | 'orange' | 'yellow' | 'purple' | 'black';

export type ProjectFrontmatter = {
  title: string;
  excerpt: string;
  path: string;
  image: string;
  variant: Variant;
  technologies: string[];
};

type Project = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  variant: Variant;
  technologies: string[];
};

export function getProjectsSlugs() {
  return fs.readdirSync(PROJECTS_PATH).filter((path) => MDX_PATTERN.test(path));
}

export const getProjectBySlug = async (slug: string) => {
  const projectFilePath = path.join(PROJECTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(projectFilePath);
  const { content, data: frontmatter } = matter(source);
  const transformedMdx = await transformMdx(content, frontmatter as ProjectFrontmatter);
  return { transformedMdx, frontmatter };
};

export const getAllProjects = () => {
  const fileNames = fs.readdirSync(PROJECTS_PATH);

  const allProjects = fileNames.map(
    (filename: string): Project => {
      const slug = filename.replace(MDX_PATTERN, '');
      const fullPath = path.join(PROJECTS_PATH, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data: frontmatter } = matter(fileContents);
      const { title, excerpt, image, variant, technologies } = frontmatter;

      return { slug, title, excerpt, image, variant, technologies };
    },
  );

  return allProjects;
};

export const getProjectsPaths = () => {
  const projectsSlugs = getProjectsSlugs();
  const projectsPaths = projectsSlugs
    .map((path) => path.replace(MDX_PATTERN, ''))
    .map((slug) => ({ params: { slug } }));
  return projectsPaths;
};
