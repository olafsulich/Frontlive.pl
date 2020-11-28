import { memo } from 'react';
import styles from './footer.module.scss';
import NewsletterForm from '../shared/components/newsletterForm/NewsletterForm';
import SocialLinks from '../shared/components/socialLinks/SocialLinks';
import ArrowRightIcon from '../../public/icons/arrow-right.svg';
import Sparkles from '../shared/components/sparkles/Sparkles';

const Footer = () => {
  return (
    <>
      <footer className={styles.wrapper}>
        <div className={styles.newsletterWrapper}>
          <h2 className={styles.heading}>Newsletter</h2>
          <p className={styles.text}>
            Podobają Ci się moje treści? Dołącz do newslettera żeby być na bieżąco ze światem
            frontendu, zdobądź dostęp do <Sparkles>dodatkowych materiałów</Sparkles> i bierz udział
            w konkursach z nagrodami!
          </p>
          <NewsletterForm />
          <SocialLinks />
        </div>
      </footer>
    </>
  );
};

export default Footer;
