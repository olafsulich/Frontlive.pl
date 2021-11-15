import styles from './newsletter.module.scss';
import { NewsletterForm } from './newsletterForm/NewsletterForm';
import Image from 'next/image';
import Decoration from '../../../../public/icons/decoration-1.svg';

export const Newsletter = () => {
  return (
    <article className={styles.wrapper}>
      <Decoration className={styles.decoration} />
      <h2 className={styles.heading}>Newsletter dla Frontend Developerów 📮</h2>
      <div className={styles.image}>
        <Image src="/images/olaf-love.png" alt="" width={288} height={293} quality={100} />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Podobają Ci się moje treści? Dołącz do newslettera żeby być na bieżąco ze światem
          frontendu, zdobądź dostęp do dodatkowych materiałów i bierz udział w konkursach z
          nagrodami! 🎁
        </p>
        <NewsletterForm />
        {/* <p className={styles.regulations}>Zapisując się do newslettera akceptujesz regulamin.</p> */}
      </div>
    </article>
  );
};
