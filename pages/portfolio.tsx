import Layout from '../components/layout/Layout';
import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Heading from 'components/shared/components/heading/Heading';
import styles from './kategorie.module.scss';
import Footer from 'components/footer/Footer';
import Workshop from '../components/workshop/Workshop';
import { projects } from '../data/projects';

type Variant = 'blue' | 'green' | 'orange' | 'yellow' | 'purple' | 'black';

type Project = {
  title: string;
  excerpt: string;
  path: string;
  image: string;
  variant: Variant;
  technologies: string[];
};

export default function Kategorie() {
  return (
    <>
      <Layout>
        <Navigation />
        <main className={styles.wrapper}>
          <Heading tag="h1" variant="primary" className={styles.heading}>
            Portfolio
          </Heading>
          {projects.map(({ title }: Project) => (
            <h2 key={title}>title</h2>
          ))}
        </main>
      </Layout>
      <Workshop />
      <Layout>
        <Footer />
      </Layout>
    </>
  );
}
