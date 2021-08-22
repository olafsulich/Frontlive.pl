import { Error } from '../components/error/Error';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/navigation/Navigation';

export default function ErrorPage() {
  return (
    <Layout>
      <Navigation />
      <Error name="Błąd!" description="Upps... Wystąpił błąd! Spróbuj ponownie później." />
    </Layout>
  );
}
