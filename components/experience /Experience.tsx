import { memo } from 'react';
import { experience } from '../../data/experience';
import styles from './experience.module.scss';
import ExperienceCard from './experienceCard/ExperienceCard';

const Experience = memo(() => (
  <section className={styles.wrapper}>
    <h2 className={styles.heading}>Umiejętności techniczne</h2>
    {experience.map(({ title, description, duration, image }) => (
      <ExperienceCard title={title} description={description} duration={duration} image={image} />
    ))}
  </section>
));

export default Experience;
