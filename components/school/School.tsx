import styles from './school.module.scss';
import Stars from '../../public/icons/rising-stars.svg';
import Rocket from '../../public/icons/rocket.svg';

export const School = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          Frontlive <span className={styles.school}>School</span>
        </h2>
        <p className={styles.text}>Wyróżnij się na rynku pracy nie wydając ani złotówki</p>
      </div>
      <a href="https://school.frontlive.pl/" target="_blank" className={styles.link}>
        <Rocket className={styles.icon} />
        Wchodzę
      </a>
      <Stars className={styles.stars} />
    </section>
  );
};
