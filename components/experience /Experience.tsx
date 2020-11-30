import { memo } from 'react';
import { experience } from '../../data/experience';
import styles from './experience.module.scss';
import ExperienceCard from './experienceCard/ExperienceCard';
import Heading from '../shared/components/heading/Heading';

const Experience = memo(() => (
  <section className={styles.wrapper}>
    <Heading variant="secondary" tag="h2" className={styles.heading}>
      Doświadczenie
    </Heading>
    {experience.map(({ title, description, duration, image }) => (
      <ExperienceCard title={title} description={description} duration={duration} image={image} />
    ))}
  </section>
));

export default Experience;
