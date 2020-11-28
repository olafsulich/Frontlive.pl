import { memo } from 'react';
import styles from './workshop.module.scss';

const Workshop = memo(() => {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <div className={styles.info}>
          <h2 className={styles.heading}>
            <img src="/images/przeprogramowani.png" alt="" className={styles.image} />
            <span className={styles.headingText}>Kurs Gatsby.js</span>
          </h2>
        </div>
        <p className={styles.text}>
          Darmowy kurs frameworka Gatsby i JamStack przygotowany we współpracy z Przeprogramowanymi.
          Zaczynamy od pustej strony, a kończymy na pełnoprawnej aplikacji!
        </p>
        <div className={styles.linkWrapper}>
          <a
            href="https://przeprogramowani.pl/darmowy-kurs-gatsby"
            target="_blank"
            rel="noopener noreferer"
            className={styles.link}
          >
            <span className="visually-hidden">Czytaj</span>
            <span>Więcej</span>
          </a>
        </div>
      </div>
      <img src="/images/gatsby-cta.png" alt="" className={styles.logo} />
    </aside>
  );
});

export default Workshop;
