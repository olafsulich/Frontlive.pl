import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { Layout } from '../../components/layout/Layout';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from 'components/footer/Footer';
import { Workshop } from '../../components/workshop/Workshop';
import { getAllPosts } from 'lib/posts';
import { Blog } from '../../components/blog/Blog';

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

const title = 'Frontlive.pl - Blog';
const description = 'Najbardziej konkretne artykuły dla frontend developerów!';
const url = 'https://frontlive.pl/blog';

export default function BlogPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <Layout>
        <Navigation />
        <Blog posts={posts} />
      </Layout>
      <Workshop />
     
        <Footer />
     
    </>
  );
}
