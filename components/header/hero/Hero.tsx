import SocialLinks from '../../shared/components/socialLinks/SocialLinks';
import NewsletterForm from '../../shared/components/newsletterForm/NewsLetterForm';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Cześć, tu Olaf 👋</h1>
        <div className={styles.textWrapper}>
          <p className={styles.text}>
            Witaj na blogu! Piszę głównie o tematach związanych z frontendem, mam nadzieję, że
            znajdziesz tutaj coś dla siebie.
          </p>
          <NewsletterForm />
          <SocialLinks />
        </div>
      </div>
      <img className={styles.heroImage} src="/images/phone.png" alt="" />
    </div>
  );
};

export default Hero;
