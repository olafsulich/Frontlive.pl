import { About } from '../components/about/About';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/navigation/Navigation';
import { NextSeo } from 'next-seo';
import { getAllPosts } from '../lib/posts';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const title = 'Frontlive.pl - O mnie';
const description = 'Kim jest autor bloga? Czym się zajmuję? Znajdziesz tutaj kilka słów o mnie :)';
const url = 'https://frontlive.pl/o-mnie';
const imageThumbnail = '/images/about.png';

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

const AboutPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
      <Layout posts={posts} isAutor={false}>
        <Navigation />
        <About />
      </Layout>
    </>
  );
};

export default AboutPage;
