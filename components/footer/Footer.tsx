import { memo } from 'react';
import styles from './footer.module.scss';
import NewsletterForm from '../shared/components/newsletterForm/NewsletterForm';
import SocialLinks from '../shared/components/socialLinks/SocialLinks';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.newsletterWrapper}>
        <h2 className={styles.heading}>Newsletter</h2>
        <p className={styles.text}>
          Pewnie spytasz, czemu miałbym się zapisywać na kolejny newsletter? Przecież jestem
          zapisany już dox newsletterów!!! Ja tak samo i tak samo jak Ty, nie lubię spamu i zalewu
          jaki dostaję na maila.
        </p>
        <NewsletterForm />
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
