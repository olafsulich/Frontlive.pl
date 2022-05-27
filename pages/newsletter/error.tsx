import { Layout } from '../../components/layout/Layout';
import { Navigation } from '../../components/navigation/Navigation';
import { NewsletterError } from '../../components/newsletter/newsletterError/newsletterError';
import { Footer } from '../../components/footer/Footer';
import { getAllPosts } from '../../lib/posts';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { AppProvider } from '../../context/appContext';

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

const NewsletterErrorPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <AppProvider posts={posts}>
      <div className="onePage">
        <Navigation />
        <NewsletterError />
      </div>
    </AppProvider>
  );
};

export default NewsletterErrorPage;
