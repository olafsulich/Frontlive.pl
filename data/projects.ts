type Variant = 'blue' | 'green' | 'orange' | 'yellow' | 'purple' | 'black';

type Project = {
  title: string;
  excerpt: string;
  path: string;
  image: string;
  variant: Variant;
  technologies: string[];
};

export const projects: Project[] = [
  {
    title: 'DevFeedback',
    excerpt: 'Description',
    path: 'devfeedback',
    image: '/images/devfeedback.png',
    variant: 'blue',
    technologies: ['Next.js(React)', 'TypeScript', 'Express', 'Prisma 2.0', 'PostgreSQL'],
  },
];
