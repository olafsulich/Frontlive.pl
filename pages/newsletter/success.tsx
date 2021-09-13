import { Layout } from '../../components/layout/Layout';
import { Navigation } from '../../components/navigation/Navigation';
import { NewsletterSuccess } from '../../components/newsletter/newsletterSuccess/newsletterSuccess';

const NewsletterSuccessPage = () => {
  return (
    <div className="onePage">
      <Navigation />
      <NewsletterSuccess />
    </div>
  );
};

export default NewsletterSuccessPage;
