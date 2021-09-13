import { Error } from '../components/error/Error';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/navigation/Navigation';

export default function NotFoundPage() {
  return (
    <div className="onePage">
      <Navigation />
      <Error name="404!" description="Upps... Strony nie znaleziono!" />
    </div>
  );
}
