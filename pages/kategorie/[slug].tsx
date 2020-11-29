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
import slugify from 'slugify';

type Params = {
  slug: string;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPostsByCategory(params!.slug as string);
  console.log(params!.slug as string);

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map(({ category }) => ({
    params: { slug: slugify(category, { lower: true }) },
  }));

  console.log(paths);

  return {
    paths,
    fallback: 'blocking',
  };
};

export default function Kategoria({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Layout>
        <Navigation />
        <main className={styles.wrapper}>
          <PostsListing posts={posts}>
            <Heading tag="h1" variant="primary" className={styles.heading}>
              {posts[0].category}
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
