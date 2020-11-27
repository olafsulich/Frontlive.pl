import { GetStaticProps, InferGetStaticPropsType } from 'next';
import PostsListing from '../components/postsListing/PostsListing';
import Layout from '../components/layout/Layout';
import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Heading from 'components/shared/components/heading/Heading';
import styles from './blog.module.scss';
import Footer from 'components/footer/Footer';
import Workshop from '../components/workshop/Workshop';
import { getAllPosts } from 'lib/mdx';

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Layout>
        <Navigation />
        <main className={styles.wrapper}>
          <PostsListing posts={posts}>
            <Heading tag="h1" variant="primary" className={styles.heading}>
              Artykuły
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
