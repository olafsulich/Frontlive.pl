import { Layout } from '../../components/layout/Layout';
import { Navigation } from '../../components/navigation/Navigation';
import { Newsletter } from '../../components/newsletter/Newsletter';
import { NextSeo } from 'next-seo';
import { getAllPosts } from '../../lib/posts';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const title = 'Frontlive.pl - Newsletter';
const description = `O nie, tylko nie kolejny branżowy newsletter, jestem już zapisany na 100 innych! Znam
            ten ból, sam jestem zapisany na X newsletterów i ja też nie lubię spamu. Dlatego w tym
            newsletterze nie uświadczysz żadnego bullshitu. Od czasu do czasu będę podsyłał Ci kilka
            przydatnych linków + aktualizację z tego bloga`;
const url = 'https://frontlive.pl/newsletter';
const imageThumbnail = '/images/newsletter.png';

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

const NewsletterPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
      <Layout posts={posts}>
        <Navigation />
        <Newsletter />
      </Layout>
    </>
  );
};

export default NewsletterPage;
