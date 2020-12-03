import { SocialLinks } from '../../../shared/components/socialLinks/SocialLinks';
import styles from './contact.module.scss';

export const Contact = () => (
  <div className={styles.contact}>
    <SocialLinks />
    <div className={styles.linkWrapper}>
      <a className={styles.link} href="mailto:olafsulich@gmail.com">
        <span>Skontaktuj się!</span>
      </a>
    </div>
  </div>
);
