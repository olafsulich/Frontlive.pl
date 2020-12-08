import { NextSeo } from 'next-seo';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/navigation/Navigation';
import { Footer } from 'components/footer/Footer';
import { Workshop } from '../components/workshop/Workshop';
import { About } from '../components/about/About';

const title = 'Frontlive.pl - O mnie';
const description =
  'Kim jest autor bloga? Czym się zajmuję? Znajdziesz tutaj kilka słów o mnie, moje umiejętności i rekomendacje';
const url = 'https://frontlive.pl/o-mnie';

export default function AboutPage() {
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
        <About />
      </Layout>
      <Workshop />
        <Footer />
    </>
  );
}
