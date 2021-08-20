import { About } from '../components/about/About';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/navigation/Navigation';
import { NextSeo } from 'next-seo';

const title = 'Frontlive.pl - O mnie';
const description = 'Kim jest autor bloga? Czym się zajmuję? Znajdziesz tutaj kilka słów o mnie :)';
const url = 'https://frontlive.pl/o-mnie';

const AboutPage = () => {
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
      <Layout isAutor={false}>
        <Navigation />
        <About />
      </Layout>
    </>
  );
};

export default AboutPage;
