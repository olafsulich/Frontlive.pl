type Variant = 'blue' | 'green' | 'orange' | 'yellow' | 'purple' | 'black';

type Category = {
  title: string;
  path: string;
  image: string;
  variant: Variant;
};

export const categories: Category[] = [
  {
    title: 'TypeScript',
    path: 'typescript',
    image: '/images/typescript.png',
    variant: 'blue',
  },
  {
    title: 'GraphQL',
    path: 'graphql',
    image: '/images/graphql.png',
    variant: 'purple',
  },
  {
    title: 'Dostępność',
    path: 'dostepnosc',
    image: '/images/a11y.png',
    variant: 'black',
  },
  {
    title: 'Svelte',
    path: 'svelte',
    image: '/images/svelte.png',
    variant: 'orange',
  },
  {
    title: 'React',
    path: 'react',
    image: '/images/react.png',
    variant: 'blue',
  },
  {
    title: 'JavaScript',
    path: 'javascript',
    image: '/images/javascript.png',
    variant: 'yellow',
  },
  {
    title: 'CSS',
    path: 'css',
    image: '/images/css.png',
    variant: 'blue',
  },
  {
    title: 'Recenzje',
    path: 'recenzje',
    image: '/images/recenzje.png',
    variant: 'green',
  },
  {
    title: 'Firebase',
    path: 'firebase',
    image: '/images/firebase.png',
    variant: 'orange',
  },
  {
    title: 'DevOps',
    path: 'devops',
    image: '/images/devops.png',
    variant: 'black',
  },
  {
    title: 'Inne',
    path: 'inne',
    image: '/images/inne.png',
    variant: 'yellow',
  },
  {
    title: 'Webpack',
    path: 'webpack',
    image: '/images/webpack.png',
    variant: 'blue',
  },
];
