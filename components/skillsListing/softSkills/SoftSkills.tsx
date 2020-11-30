import { memo } from 'react';
import { softSkills } from '../../../data/skills';
import styles from './softSkills.module.scss';
import SoftSkillsList from './softSkillsList/SoftSkillsList';

const SoftSkills = memo(() => (
  <section className={styles.wrapper}>
    <h2 className={styles.heading}>Umiejętności miękkie</h2>
    <div className={styles.skills}>
      <SoftSkillsList title="Umiejętności miękkie" skills={softSkills} />
    </div>
  </section>
));

export default SoftSkills;
