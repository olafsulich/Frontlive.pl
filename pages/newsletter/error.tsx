import { Layout } from '../../components/layout/Layout';
import { Navigation } from '../../components/navigation/Navigation';
import { NewsletterError } from '../../components/newsletter/newsletterError/newsletterError';
import { Footer } from '../../components/footer/Footer';

const NewsletterErrorPage = () => {
  return (
    <div className="onePage">
      <Navigation />
      <NewsletterError />
    </div>
  );
};

export default NewsletterErrorPage;
