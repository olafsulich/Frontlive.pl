import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/navigation/Navigation';
import { NextSeo } from 'next-seo';
import { Podcast } from '../components/podcast/Podcast';

const title = 'Frontlive.pl - Rozmówki';
const description = 'Kim jest autor bloga? Czym się zajmuję? Znajdziesz tutaj kilka słów o mnie :)';
const url = 'https://frontlive.pl/podcast';
const imageThumbnail = '/images/podcast.png';

const records = [{ name: 'Automatyzacje, Web Dev i YouTube' }];

const PodcastPage = () => {
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
          images: [
            {
              url: imageThumbnail,
              alt: title,
              width: 1200,
              height: 628,
            },
          ],
        }}
      />
      <Layout>
        <Navigation />
        {/* <Podcast /> */}
      </Layout>
    </>
  );
};

export default PodcastPage;
