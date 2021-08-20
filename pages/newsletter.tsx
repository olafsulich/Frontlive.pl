import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/navigation/Navigation';
import { Newsletter } from '../components/newsletter/Newsletter';

const NewsletterPage = () => {
  return (
    <Layout>
      <Navigation />
      <Newsletter />
    </Layout>
  );
};

export default NewsletterPage;
