import { Error } from '../components/error/Error';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/navigation/Navigation';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getAllPosts } from '../lib/posts';

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

export default function ErrorPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout posts={posts}>
      <Navigation />
      <Error name="Błąd!" description="Upps... Wystąpił błąd! Spróbuj ponownie później." />
    </Layout>
  );
}
