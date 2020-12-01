import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/navigation/Navigation';
import { Footer } from 'components/footer/Footer';
import { Workshop } from '../components/workshop/Workshop';
import { About } from '../components/about/About';

export default function AboutPage() {
  return (
    <>
      <Layout>
        <Navigation />
        <About />
      </Layout>
      <Workshop />
      <Layout>
        <Footer />
      </Layout>
    </>
  );
}
