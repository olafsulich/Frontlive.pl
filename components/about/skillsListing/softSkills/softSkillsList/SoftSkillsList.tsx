import { memo } from 'react';
import styles from './softSkillsList.module.scss';
import { CheckMark } from '../../../../shared/components/checkMark/CheckMark';

type SoftSkillsListProps = {
  skills: string[];
};

export const SoftSkillsList = memo<SoftSkillsListProps>(({ skills }) => (
  <div className={styles.wrapper}>
    <ul className={styles.list}>
      {skills.map((skill) => (
        <li key={skill} className={styles.item}>
          <CheckMark variant="orange" />
          {skill}
        </li>
      ))}
    </ul>
  </div>
));
