import { memo } from 'react';
import { frontendSkills, backendSkills, devOpsSkills, otherSkills } from '../../../data/skills';
import styles from './technicalSkills.module.scss';
import TechnicalSkillsList from './technicalSkillsList/TechnicalSkillsList';

const TechnicalSkills = memo(() => (
  <section className={styles.wrapper}>
    <h2 className={styles.heading}>Umiejętności techniczne</h2>
    <div className={styles.skills}>
      <TechnicalSkillsList title="Frontend" skills={frontendSkills} variant="blue" />
      <TechnicalSkillsList title="Backend" skills={backendSkills} variant="green" />
      <TechnicalSkillsList title="DevOps" skills={devOpsSkills} variant="yellow" />
      <TechnicalSkillsList title="Inne" skills={otherSkills} variant="purple" />
    </div>
  </section>
));

export default TechnicalSkills;
