import { memo } from 'react';
import styles from './experienceCard.module.scss';

type ExperienceCardProps = {
  title: string;
  description: string;
  duration: string;
  image: string;
};

export const ExperienceCard = memo<ExperienceCardProps>(
  ({ title, description, duration, image }) => (
    <li className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={image} alt="" className={styles.image} />
      </div>
      <div className={styles.textWrapper}>
        <h3 className={styles.heading}>{title}</h3>
        <p className={styles.duration}>
          <span className="visually-hidden">Czas trwania:</span>
          {duration}
        </p>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  ),
);
