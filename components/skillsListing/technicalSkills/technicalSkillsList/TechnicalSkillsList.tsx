import { memo } from 'react';
import styles from './technicalSkillsList.module.scss';
import CheckMark from '../../../shared/components/checkMark/CheckMark';

type Variant = 'blue' | 'green' | 'orange' | 'yellow' | 'purple' | 'black';

type TechnicalSkillsListProps = {
  title: string;
  variant: Variant;
  skills: string[];
};

const TechnicalSkillsList = memo<TechnicalSkillsListProps>(({ title, variant, skills }) => (
  <article className={styles.wrapper}>
    <h3 id={title} className={styles.heading}>
      {title}
    </h3>
    <ul aria-labelledby={title} className={styles.list}>
      {skills.map((skill) => (
        <li key={skill} className={styles.item}>
          <CheckMark variant={variant} />
          {skill}
        </li>
      ))}
    </ul>
  </article>
));

export default TechnicalSkillsList;
