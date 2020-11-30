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
    excerpt:
      'Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.',
    path: 'devfeedback',
    image: '/images/devfeedback.png',
    variant: 'blue',
    technologies: ['Next.js(React)', 'TypeScript', 'Express', 'Prisma 2.0', 'PostgreSQL'],
  },
  {
    title: 'use-haki',
    excerpt:
      'Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.',
    path: 'second',
    image: '/images/devfeedback.png',
    variant: 'green',
    technologies: ['Next.js(React)', 'TypeScript', 'Express', 'Prisma 2.0', 'PostgreSQL'],
  },
  {
    title: 'Projecty',
    excerpt:
      'Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.',
    path: 'third',
    image: '/images/devfeedback.png',
    variant: 'yellow',
    technologies: ['Next.js(React)', 'TypeScript', 'Express', 'Prisma 2.0', 'PostgreSQL'],
  },
];
