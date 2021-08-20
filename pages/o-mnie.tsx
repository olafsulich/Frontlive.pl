import { About } from '../components/about/About';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/navigation/Navigation';

const AboutPage = () => {
  return (
    <Layout isAutor={false}>
      <Navigation />
      <About />
    </Layout>
  );
};

export default AboutPage;
