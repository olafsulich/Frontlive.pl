import { GetStaticProps, InferGetStaticPropsType } from 'next';
import PostsListing from '../../components/postsListing/PostsListing';
import Layout from '../../components/layout/Layout';
import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import Heading from 'components/shared/components/heading/Heading';
import styles from '../blog.module.scss';
import Footer from 'components/footer/Footer';
import Workshop from '../../components/workshop/Workshop';
import { getPostsByCategory, getAllPosts } from 'lib/mdx';

type Params = {
  slug: string;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPostsByCategory(params!.slug as string);

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map(({ category }) => ({ params: { slug: category } }));

  return {
    paths,
    fallback: false,
  };
};

export default function Kategoria({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(posts);
  return (
    <>
      <Layout>
        <Navigation />
        <main className={styles.wrapper}>
          <PostsListing>
            <Heading tag="h1" variant="primary" className={styles.heading}>
              Kategoria
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
