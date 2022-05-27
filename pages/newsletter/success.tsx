import { Layout } from '../../components/layout/Layout';
import { Navigation } from '../../components/navigation/Navigation';
import { NewsletterSuccess } from '../../components/newsletter/newsletterSuccess/newsletterSuccess';
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

const NewsletterSuccessPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <AppProvider posts={posts}>
      <div className="onePage">
        <Navigation />
        <NewsletterSuccess />
      </div>
    </AppProvider>
  );
};

export default NewsletterSuccessPage;
