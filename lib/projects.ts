import path from 'path';
import { getResourceBySlug, getResourcesPaths, getAllResources } from './utils/resource';
import type { Project } from './utils/types';

const PROJECTS_PATH = path.join(process.cwd(), 'content/projects');

export const getProjectBySlug = async (slug: string) => {
  const project = await getResourceBySlug(slug, PROJECTS_PATH);
  return project;
};

export const getAllProjects = () => {
  const allProjects = getAllResources<Project>(PROJECTS_PATH);
  return allProjects;
};

export const getProjectsPaths = () => {
  const paths = getResourcesPaths(PROJECTS_PATH);
  return paths;
};
