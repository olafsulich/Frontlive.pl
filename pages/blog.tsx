import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/navigation/Navigation';
import { Footer } from 'components/footer/Footer';
import { Workshop } from '../components/workshop/Workshop';
import { getAllPosts } from 'lib/mdx';
import { Blog } from '../components/blog/Blog';

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
    <>
      <Layout>
        <Navigation />
        <Blog posts={posts} />
      </Layout>
      <Workshop />
      <Layout>
        <Footer />
      </Layout>
    </>
  );
}
