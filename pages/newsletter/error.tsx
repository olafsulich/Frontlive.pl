import { Layout } from '../../components/layout/Layout';
import { Navigation } from '../../components/navigation/Navigation';
import { Newsletter } from '../../components/newsletter/Newsletter';
import { NewsletterError } from '../../components/newsletter/newsletterError/newsletterError';

const NewsletterErrorPage = () => {
  return (
    <Layout>
      <Navigation />
      <NewsletterError />
    </Layout>
  );
};

export default NewsletterErrorPage;
