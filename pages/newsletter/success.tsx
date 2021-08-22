import { Layout } from '../../components/layout/Layout';
import { Navigation } from '../../components/navigation/Navigation';
import { NewsletterSuccess } from '../../components/newsletter/newsletterSuccess/newsletterSuccess';

const NewsletterSuccessPage = () => {
  return (
    <Layout>
      <Navigation />
      <NewsletterSuccess />
    </Layout>
  );
};

export default NewsletterSuccessPage;
