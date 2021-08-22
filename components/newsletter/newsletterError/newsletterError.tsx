import Image from 'next/image';
import styles from './newsletterError.module.scss';
import { Heading } from '../../shared/components/heading/Heading';

export const NewsletterError = () => {
  return (
    <main className={styles.container}>
      <Heading className={styles.heading} tag="h1" variant="primary">
        Błąd!
      </Heading>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          Upps...Coś poszło nie tak, sprawdź czy nie jesteś już na liście subskrybujących, jeśli nie
          to napisz do mnie na maila -{' '}
          <a href="mailto:olafsulich@gmail.com" className={styles.link}>
            olafsulich@gmail.com
          </a>
          .
        </p>
        <Image src="/images/olaf-sad.png" alt="" width={299} height={296} quality={100} />
      </div>
    </main>
  );
};
