import Layout from '../components/layout/Layout';
import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Heading from 'components/shared/components/heading/Heading';
import styles from './kursy.module.scss';
import Courses from 'components/courses/Courses';
import Footer from 'components/footer/Footer';
import Workshop from '../components/workshop/Workshop';

export default function Kursy() {
  return (
    <>
      <Layout>
        <Navigation />
        <main className={styles.wrapper}>
          <Heading tag="h1" variant="primary" className={styles.heading}>
            Kursy
          </Heading>
          <Courses />
        </main>
      </Layout>
      <Workshop />
      <Layout>
        <Footer />
      </Layout>
    </>
  );
}
