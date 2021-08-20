import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/navigation/Navigation';
import { Newsletter } from '../components/newsletter/Newsletter';
import { NextSeo } from 'next-seo';

const title = 'Frontlive.pl - Newsletter';
const description = `O nie, tylko nie kolejny branżowy newsletter, jestem już zapisany na 100 innych! Znam
            ten ból, sam jestem zapisany na X newsletterów i ja też nie lubię spamu. Dlatego w tym
            newsletterze nie uświadczysz żadnego bullshitu. Od czasu do czasu będę podsyłał Ci kilka
            przydatnych linków + aktualizację z tego bloga`;
const url = 'https://frontlive.pl/newsletter';

const NewsletterPage = () => {
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
        <Newsletter />
      </Layout>
    </>
  );
};

export default NewsletterPage;
