import { memo } from 'react';
import styles from './workshop.module.scss';

const Workshop = memo(() => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <div className={styles.info}>
          <h2 className={styles.heading}>
            <img src="/images/przeprogramowani.png" alt="" className={styles.image} />
            <span className={styles.headingText}>Kurs Gatsby.js</span>
          </h2>
        </div>
        <p className={styles.text}>
          Earlier this year, I developed Cubital Tunnel Syndrome, a repetitive-strain injury, in
          both of my elbows. As a result, I pretty much can't use a mouse or keyboard; after a few
          minutes, I get a burning pain shooting down my arms.
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
    </article>
  );
});

export default Workshop;
