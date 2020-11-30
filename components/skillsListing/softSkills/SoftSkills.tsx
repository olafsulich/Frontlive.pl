import { memo } from 'react';
import { softSkills } from '../../../data/skills';
import styles from './softSkills.module.scss';
import SoftSkillsList from './softSkillsList/SoftSkillsList';
import Heading from '../../shared/components/heading/Heading';

const SoftSkills = memo(() => (
  <section className={styles.wrapper}>
    <Heading variant="secondary" tag="h2" className={styles.heading}>
      Umiejętności miękkie
    </Heading>
    <div className={styles.skills}>
      <SoftSkillsList title="Umiejętności miękkie" skills={softSkills} />
    </div>
  </section>
));

export default SoftSkills;
