import Header from '../components/header/Header';
import PostsListing from '../components/postsListing/PostsListing';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <PostsListing heading="Najnowsze" />
      <PostsListing heading="Najpopularniejsze" />
    </Layout>
  );
}
