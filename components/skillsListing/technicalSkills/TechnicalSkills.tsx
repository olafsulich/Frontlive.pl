import { memo } from 'react';
import { frontendSkills, backendSkills, devOpsSkills, otherSkills } from '../../../data/skills';
import styles from './technicalSkills.module.scss';
import TechnicalSkillsList from './technicalSkillsList/TechnicalSkillsList';
import Heading from '../../shared/components/heading/Heading';

const TechnicalSkills = memo(() => (
  <section className={styles.wrapper}>
    <Heading variant="secondary" tag="h2" className={styles.heading}>
      Umiejętności techniczne
    </Heading>
    <div className={styles.skills}>
      <TechnicalSkillsList title="Frontend" skills={frontendSkills} variant="blue" />
      <TechnicalSkillsList title="Backend" skills={backendSkills} variant="green" />
      <TechnicalSkillsList title="DevOps" skills={devOpsSkills} variant="yellow" />
      <TechnicalSkillsList title="Inne" skills={otherSkills} variant="purple" />
    </div>
  </section>
));

export default TechnicalSkills;
