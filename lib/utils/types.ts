export type Variant = 'blue' | 'green' | 'orange' | 'yellow' | 'purple' | 'black';

type Frontmatter = {
  title: string;
  excerpt: string;
};

export type PostFrontmatter = {
  category: string;
  publishedAt: string;
  popular: boolean;
  isPublished: boolean;
  image: string;
} & Frontmatter;

export type ProjectFrontmatter = {
  path: string;
  image: string;
  variant: Variant;
  technologies: string[];
} & Frontmatter;

export type Project = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  variant: Variant;
  technologies: string[];
  order: number;
};

export type Post = {
  title: string;
  category: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  popular: boolean;
  isPublished: boolean;
};
