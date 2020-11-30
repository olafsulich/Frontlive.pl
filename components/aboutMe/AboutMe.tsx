import styles from './aboutMe.module.scss';
import Experience from '../experience /Experience';
import React from 'react';
import Heading from '../shared/components/heading/Heading';
import SocialLinks from '../shared/components/socialLinks/SocialLinks';
import TechnicalSkills from '../skillsListing/technicalSkills/TechnicalSkills';
import SoftSkills from '../skillsListing/softSkills/SoftSkills';

const AboutMe = () => (
  <section className={styles.wrapper}>
    <div className={styles.aboutWrapper}>
      <div className={styles.text}>
        <Heading className={styles.heading} variant="primary" tag="h1">
          O mnie
        </Heading>
        <p className={styles.text}>
          I recently got the following message in a DM: I’ve been building with HTML and CSS for
          years, and I still don’t know how to implement pixel-perfect designs If you're not
          familiar with the term, "pixel-perfection" is the idea that your HTML/CSS implementation
          should be as close to the original mockup…
        </p>
        <p className={styles.text}>
          I recently got the following message in a DM: I’ve been building with HTML and CSS for
          years, and I still don’t know how to implement pixel-perfect designs If you're not
          familiar with the term, "pixel-perfection" is the idea that your HTML/CSS implementation
          should be as close to the original mockup…
        </p>
        <div className={styles.contact}>
          <SocialLinks />
          <button>Kontakt</button>
        </div>
      </div>
      <img src="/images/me.png" alt="" className={styles.image} />
    </div>
    <Experience />
    <TechnicalSkills />
    <SoftSkills />
  </section>
);

export default AboutMe;
