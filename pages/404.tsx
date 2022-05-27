import { Error } from '../components/error/Error';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/navigation/Navigation';
import { getAllPosts } from '../lib/posts';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { AppProvider } from '../context/appContext';

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

export default function NotFoundPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <AppProvider posts={posts}>
      <div className="onePage">
        <Navigation />
        <Error name="404!" description="Upps... Strony nie znaleziono!" />
      </div>
    </AppProvider>
  );
}
