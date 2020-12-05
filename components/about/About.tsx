import { Experience } from './experience/Experience';
import { TechnicalSkills } from './skillsListing/technicalSkills/TechnicalSkills';
import { SoftSkills } from './skillsListing/softSkills/SoftSkills';
import { Recommendations } from './recommendations/Recommendations';
import { AboutMe } from './aboutMe/AboutMe';
import styles from './about.module.scss';

export const About = () => (
  <main className={styles.container} id="main">
    <div className={styles.aboutWrapper}>
      <AboutMe />
      <Experience />
      <TechnicalSkills />
      <SoftSkills />
      <Recommendations />
    </div>
  </main>
);
