import styles from './articles.module.scss';

export const Articles = () => (
  <div className={styles.wrapper}>
    <section className={styles.articles} aria-labelledby="latest-articles">
      <h2 id="latest-articles" className="visually-hidden">
        Najnowsze artykuły
      </h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <time className={styles.date}>27.02.2022</time>
          <p className={styles.title}>Pułapki konstrukcji warunkowych w React i JSX</p>
        </li>
        <li className={styles.item}>
          <time className={styles.date}>27.02.2022</time>
          <p className={styles.title}>Pułapki konstrukcji warukowych w React i JSX</p>
        </li>
        <li className={styles.item}>
          <time className={styles.date}>27.02.2022</time>
          <p className={styles.title}>Pułapki konstrukcji warukowych w React i JSX</p>
        </li>
        <li className={styles.item}>
          <time className={styles.date}>27.02.2022</time>
          <p className={styles.title}>Pułapki konstrukcji warukowych w React i JSX</p>
        </li>
      </ul>
    </section>
    <span className={styles.heading} aria-hidden="true">
      front
    </span>
  </div>
);
