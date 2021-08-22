import { Error } from '../components/error/Error';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/navigation/Navigation';

export default function NotFoundPage() {
  return (
    <Layout>
      <Navigation />
      <Error name="404!" description="Upps... Strony nie znaleziono!" />
    </Layout>
  );
}
