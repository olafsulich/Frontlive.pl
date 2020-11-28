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
    title: 'Firebase',
    path: 'firebase',
    image: '/images/firebase.png',
    variant: 'orange',
  },
  {
    title: 'Gatsby',
    path: 'gatsby',
    image: '/images/gatsby.png',
    variant: 'purple',
  },
  {
    title: 'Webpack',
    path: 'webpack',
    image: '/images/webpack.png',
    variant: 'blue',
  },
  {
    title: 'Dostępność',
    path: 'accessibility',
    image: '/images/a11y.png',
    variant: 'black',
  },
  {
    title: 'JavaScript',
    path: 'javascript',
    image: '/images/javascript.png',
    variant: 'yellow',
  },
];
