import { memo } from 'react';
import styles from './softSkillsList.module.scss';
import { CheckMark } from '../../../../shared/components/checkMark/CheckMark';

type SoftSkillsListProps = {
  title: string;
  skills: string[];
};

export const SoftSkillsList = memo<SoftSkillsListProps>(({ title, skills }) => (
  <div className={styles.wrapper}>
    <ul aria-labelledby={title} className={styles.list}>
      {skills.map((skill) => (
        <li key={skill} className={styles.item}>
          <CheckMark variant="orange" />
          {skill}
        </li>
      ))}
    </ul>
  </div>
));
