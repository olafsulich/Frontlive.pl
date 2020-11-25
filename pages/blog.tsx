import PostsListing from '../components/postsListing/PostsListing';
import Layout from '../components/layout/Layout';
import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Heading from 'components/shared/components/heading/Heading';

export default function Blog() {
  return (
    <Layout>
      <Navigation />
      <main>
        <PostsListing>
          <Heading tag="h1" variant="primary">
            Artykuły
        </Heading>
        </PostsListing>
      </main>
    </Layout>
  );
}
