import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Header from '../components/header/Header';
import PostsListing from '../components/postsListing/PostsListing';
import Layout from '../components/layout/Layout';
import Categories from '../components/categories/Categories';
import Workshop from '../components/workshop/Workshop';
import Navigation from '../components/navigation/Navigation';
import Heading from 'components/shared/components/heading/Heading';
import Footer from 'components/footer/Footer';
import { getNewestPosts, getPopularPosts } from 'lib/mdx';
import { categories } from '../data/categories';

export const getStaticProps: GetStaticProps = async () => {
  const newestPosts = getNewestPosts();
  const popularPosts = getPopularPosts();

  return {
    props: {
      newestPosts,
      popularPosts,
    },
    revalidate: 1,
  };
};

export default function Home({
  newestPosts,
  popularPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Layout>
        <Header>
          <Navigation />
        </Header>
        <main>
          <PostsListing posts={newestPosts}>
            <Heading tag="h2" variant="secondary">
              Najnowsze
            </Heading>
          </PostsListing>
          <Categories categories={categories.slice(0, 3)} />
          <PostsListing posts={popularPosts}>
            <Heading tag="h2" variant="secondary">
              Najpopularniejsze
            </Heading>
          </PostsListing>
        </main>
      </Layout>
      <Workshop />
      <Layout>
        <Footer />
      </Layout>
    </>
  );
}
