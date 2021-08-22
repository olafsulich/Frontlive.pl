import Image from 'next/image';
import styles from './newsletterSuccess.module.scss';
import { Heading } from '../../shared/components/heading/Heading';

export const NewsletterSuccess = () => {
  return (
    <main className={styles.container}>
      <Heading className={styles.heading} tag="h1" variant="primary">
        Zapisano!
      </Heading>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          Dzięki za zaufanie 💜 Nie musisz już niczego potwierdzać. Na Twoją skrzynkę w przeciągu
          kilku chwil powinien trafić powitalny mail, witamy w drużynie!
        </p>
        <Image src="/images/olaf-party.png" alt="" width={434} height={391} quality={100} />
      </div>
    </main>
  );
};
