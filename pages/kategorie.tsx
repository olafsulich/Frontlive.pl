import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/navigation/Navigation';
import { Footer } from 'components/footer/Footer';
import { Workshop } from '../components/workshop/Workshop';
import { Categories } from '../components/categories/Categories';
import { categories } from '../data/categories';

export default function Kategorie() {
  return (
    <>
      <Layout>
        <Navigation />
        <Categories categories={categories} />
      </Layout>
      <Workshop />
      <Layout>
        <Footer />
      </Layout>
    </>
  );
}
