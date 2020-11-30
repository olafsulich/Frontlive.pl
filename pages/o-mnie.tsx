import Layout from '../components/layout/Layout';
import React from 'react';
import Navigation from '../components/navigation/Navigation';
import styles from './portfolio.module.scss';
import Footer from 'components/footer/Footer';
import Workshop from '../components/workshop/Workshop';
import AboutMe from '../components/aboutMe/AboutMe';

export default function About() {
  return (
    <>
      <Layout>
        <Navigation />
        <main className={styles.wrapper}>
          <AboutMe />
        </main>
      </Layout>
      <Workshop />
      <Layout>
        <Footer />
      </Layout>
    </>
  );
}
