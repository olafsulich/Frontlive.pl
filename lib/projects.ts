import path from 'path';
import { getResourceBySlug, getResourcesPaths, getAllResources } from './utils/resource';
import type { Project } from './utils/types';

const PROJECTS_PATH = path.join(process.cwd(), 'content/projects');

export const getProjectBySlug = async (slug: string) => {
  const project = await getResourceBySlug(slug, PROJECTS_PATH);
  return project;
};

const sortProjectsByOrder = (posts: Project[]) => {
  return posts.sort((a, b) => (a.order > b.order ? 1 : -1));
};

export const getAllProjects = () => {
  const allProjects = getAllResources<Project>(PROJECTS_PATH);
  const sortedProjects = sortProjectsByOrder(allProjects);
  return sortedProjects;
};

export const getProjectsPaths = () => {
  const paths = getResourcesPaths(PROJECTS_PATH);
  return paths;
};
