import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Layout from '../components/layout/Layout';
import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Heading from 'components/shared/components/heading/Heading';
import styles from './portfolio.module.scss';
import Footer from 'components/footer/Footer';
import Workshop from '../components/workshop/Workshop';
import ProjectsListing from '../components/projectsListing/ProjectsListing';
import { getAllProjects } from 'lib/mdx';

type Variant = 'blue' | 'green' | 'orange' | 'yellow' | 'purple' | 'black';

type Project = {
  title: string;
  excerpt: string;
  path: string;
  image: string;
  variant: Variant;
  technologies: string[];
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjects();

  return {
    props: {
      projects,
    },
    revalidate: 1,
  };
};

export default function Portfolio({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(projects);
  return (
    <>
      <Layout>
        <Navigation />
        <main className={styles.wrapper}>
          <Heading tag="h1" variant="primary" className={styles.heading}>
            Portfolio
          </Heading>
          <ProjectsListing projects={projects} />
        </main>
      </Layout>
      <Workshop />
      <Layout>
        <Footer />
      </Layout>
    </>
  );
}
