import Image from 'next/image';
import { SocialLinks } from './socialLinks/SocialLinks';
import styles from './author.module.scss';
import SmileIcon from '../../public/icons/smile-face.svg';

export const Author = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className="visually-hidden">O autorze</h2>
      <div className={styles.image}>
        <Image
          src="/images/olaf-circle-midnight.png"
          alt="Olaf Sulich"
          width={200}
          height={200}
          quality={100}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Olaf jest Frontend Developerem, blogerem i nosi rybacki kapelusz 🎩 Pisze o wszystkim co
          związane z frontendem, ale nie boi się backendu i designów 🦾 Ma głowę pełną pomysłów i
          nadzieję, że znajdziesz tutaj coś dla siebie! <SmileIcon className={styles.smile} />
        </p>
        <SocialLinks />
      </div>
    </section>
  );
};
