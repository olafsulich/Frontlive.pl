import styles from './workshop.module.scss';

export const Workshop = () => {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <div className={styles.info}>
          <h2 className={styles.heading}>
            <picture className={styles.image}>
              <source
                className={styles.image}
                srcSet={require(`../../public/images/przeprogramowani.png?webp`)}
                type="image/webp"
              />
              <img
                src="/images/przeprogramowani.png"
                alt=""
                width="273"
                height="64"
                className={styles.image}
              />
            </picture>
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
      <picture className={styles.logo}>
        <source srcSet={require(`../../public/images/gatsby-cta.png?webp`)} type="image/webp" />
        <img src="/images/gatsby-cta.png" alt="" width="291" height="338" loading="lazy" />
      </picture>
    </aside>
  );
};
