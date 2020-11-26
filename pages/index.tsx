import Header from '../components/header/Header';
import PostsListing from '../components/postsListing/PostsListing';
import Layout from '../components/layout/Layout';
import Courses from '../components/courses/Courses';
import Workshop from '../components/workshop/Workshop';
import Navigation from '../components/navigation/Navigation';
import Heading from 'components/shared/components/heading/Heading';
import Footer from 'components/footer/Footer';

export default function Home() {
  return (
    <>
      <Layout>
        <Header>
          <Navigation />
        </Header>
        <main>
          <PostsListing>
            <Heading tag="h2" variant="secondary">
              Najnowsze
            </Heading>
          </PostsListing>
          <Courses />
          <PostsListing>
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
