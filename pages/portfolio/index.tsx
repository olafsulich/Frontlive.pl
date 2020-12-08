import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { Layout } from '../../components/layout/Layout';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from 'components/footer/Footer';
import { Workshop } from '../../components/workshop/Workshop';
import { Portfolio } from '../../components/portfolio/Portfolio';
import { getAllProjects } from 'lib/projects';

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjects();

  return {
    props: {
      projects,
    },
    revalidate: 1,
  };
};

const title = 'Frontlive.pl - Portfolio';
const description = 'Przedstawienie moich projektów Open source';
const url = 'https://frontlive.pl/portfolio';

export default function PortfolioPage({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
              url: `https:frontlive.vercel.app/images/portfolio.png`,
              alt: title,
              width: 1200,
              height: 628,
            },
          ],
        }}
      />
      <Layout>
        <Navigation />
        <Portfolio projects={projects} />
      </Layout>
      <Workshop />
      <Footer />
    </>
  );
}
