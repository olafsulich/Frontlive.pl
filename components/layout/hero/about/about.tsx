import styles from './about.module.scss';
import Image from 'next/image';
import Star from '../../../../public/icons/star.svg';

export const About = () => {
  return (
    <section aria-labelledby="created-by" className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.heading} aria-hidden="true">
          live
          <div className={styles.star}>
            <Star aria-hidden="true" />
          </div>
        </span>
        <h2 id="created-by" className={styles.author}>
          <span className="visually-hidden">Stworzone przez Olafa Sulicha</span>
          <span aria-hidden="true">by Olaf Sulich</span>
        </h2>
        <p className={styles.text}>
          Frontend to nie tylko centrowanie diva. To również architektura, testy, performance,
          accessibility i masa innych bardziej zaawansowanych tematów. Frontlive to blog dla
          ambitnych programistów, którzy chcą wyjść poza podstawy tworzenia UI.
        </p>
      </div>
      <div className={styles.image}>
        <Image src="/images/olaf2.png" width={279} height={308} priority={true} />
      </div>
    </section>
  );
};
