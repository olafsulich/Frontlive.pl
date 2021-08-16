import { Layout } from '../../components/layout/Layout';
import { PostsListing } from '../../components/blog/postsListing/PostsListing';
import { Heading } from '../../components/shared/components/heading/Heading';
import { Categories } from '../../components/categories/Categories';
import { Navigation } from '../../components/navigation/Navigation';
import { Blog } from '../../components/blog/Blog';
import { getAllPosts } from '../../lib/posts';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const categoriesArr = [
  { title: 'TypeScript', path: '' },
  { title: 'Jest', path: '' },
  { title: 'JavaScript', path: '' },
  { title: 'Dostępność', path: '' },
  { title: 'React', path: '' },
  { title: 'CSS', path: '' },
  { title: 'Svelte', path: '' },
  { title: 'GraphQL', path: '' },
  { title: 'Firebase', path: '' },
  { title: 'Inne', path: '' },
  { title: 'DevOps', path: '' },
  { title: 'Webpack', path: '' },
];

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

export default function BlogPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Navigation />
      <Blog posts={posts} categories={categoriesArr} />
    </Layout>
  );
}
