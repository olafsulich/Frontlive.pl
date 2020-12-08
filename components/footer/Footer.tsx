import { NewsletterForm } from '../shared/components/newsletterForm/NewsletterForm';
import { SocialLinks } from '../shared/components/socialLinks/SocialLinks';
import { Sparkles } from '../shared/components/sparkles/Sparkles';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.newsletterWrapper}>
          <h2 className={styles.heading}>Newsletter</h2>
          <p className={styles.text}>
            Podobają Ci się moje treści? Dołącz do newslettera żeby być na bieżąco ze światem
            frontendu, zdobądź dostęp do <Sparkles>dodatkowych materiałów</Sparkles> i bierz udział
            w konkursach z nagrodami!
          </p>
          <NewsletterForm id="footerNewsletter" />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};
