import Header from '../components/header/Header';
import PostsListing from '../components/postsListing/PostsListing';
import Layout from '../components/layout/Layout';
import Courses from '../components/courses/Courses';

export default function Home() {
  return (
    <Layout>
      <PostsListing heading="Najnowsze" />
      <Courses />
      <PostsListing heading="Najpopularniejsze" />
    </Layout>
  );
}
