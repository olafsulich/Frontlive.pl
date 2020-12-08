import { NextSeo } from 'next-seo';
import { Layout } from '../../components/layout/Layout';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from 'components/footer/Footer';
import { Workshop } from '../../components/workshop/Workshop';
import { Categories } from '../../components/categories/Categories';
import { categories } from '../../data/categories';

const title = 'Frontlive.pl - Kategorie';
const description =
  'Artykuły posortowane według kategorii - na pewno znajdziesz tutaj coś dla siebie!';
const url = 'https://frontlive.pl/kategorie';

export default function Kategorie() {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <Layout>
        <Navigation />
        <Categories categories={categories} />
      </Layout>
      <Workshop />
      <Footer />
    </>
  );
}
