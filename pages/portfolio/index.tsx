import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Layout } from '../../components/layout/Layout';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from 'components/footer/Footer';
import { Workshop } from '../../components/workshop/Workshop';
import { Portfolio } from '../../components/portfolio/Portfolio';
import { getAllProjects } from 'lib/mdx';

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjects();

  return {
    props: {
      projects,
    },
    revalidate: 1,
  };
};

export default function PortfolioPage({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Layout>
        <Navigation />
        <Portfolio projects={projects} />
      </Layout>
      <Workshop />
      <Layout>
        <Footer />
      </Layout>
    </>
  );
}
