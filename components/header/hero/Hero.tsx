import { SocialLinks } from '../../shared/components/socialLinks/SocialLinks';
import { NewsletterForm } from '../../shared/components/newsletterForm/NewsletterForm';
import styles from './hero.module.scss';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Cześć, tu Olaf</h1>
        <div className={styles.textWrapper}>
          <p className={styles.text}>
            Witaj na blogu! Piszę głównie o tematach związanych z frontendem, mam nadzieję, że
            znajdziesz tutaj coś dla siebie.
          </p>
          <NewsletterForm id="email" />
          <SocialLinks />
        </div>
      </div>
      <img className={styles.heroImage} src="/images/olaf.png" alt="" width="348" height="443" />
    </div>
  );
};
