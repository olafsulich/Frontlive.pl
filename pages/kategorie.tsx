import Layout from '../components/layout/Layout';
import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Heading from 'components/shared/components/heading/Heading';
import styles from './kategorie.module.scss';
import Courses from 'components/categories/Categories';
import Footer from 'components/footer/Footer';
import Workshop from '../components/workshop/Workshop';
import { categories } from '../data/categories';

export default function Kategorie() {
  return (
    <>
      <Layout>
        <Navigation />
        <main className={styles.wrapper}>
          <Heading tag="h1" variant="primary" className={styles.heading}>
            Kategorie
          </Heading>
          <Courses categories={categories} />
        </main>
      </Layout>
      <Workshop />
      <Layout>
        <Footer />
      </Layout>
    </>
  );
}
