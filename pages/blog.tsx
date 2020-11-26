import PostsListing from '../components/postsListing/PostsListing';
import Layout from '../components/layout/Layout';
import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Heading from 'components/shared/components/heading/Heading';
import styles from './blog.module.scss';

export default function Blog() {
  return (
    <Layout>
      <Navigation />
      <main className={styles.wrapper}>
        <PostsListing>
          <Heading tag="h1" variant="primary" className={styles.heading}>
            Artykuły
          </Heading>
        </PostsListing>
      </main>
    </Layout>
  );
}
