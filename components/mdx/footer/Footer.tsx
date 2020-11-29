import { memo, ReactNode } from 'react';
import styles from './footer.module.scss';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import TwitterIcon from '../../../public/icons/twitter.svg';
import FacebookIcon from '../../../public/icons/facebook.svg';
import LinkedInIcon from '../../../public/icons/linkedin.svg';

dayjs.extend(localizedFormat);

type FooterProps = {
  publishedAt: string;
};

const Footer = memo(({ publishedAt }: FooterProps) => {
  const formattedDate = dayjs(publishedAt).locale('pl').format('LL');
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Data dodania</h2>
        <time className={styles.text} dateTime={publishedAt}>
          {formattedDate}
        </time>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Udostępnij</h2>
        <div className={styles.share}>
          <a
            href="https://www.linkedin.com/in/olaf-sulich"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span className="visually-hidden">Profil LinkedIn</span>
            <TwitterIcon className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/olaf-sulich"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span className="visually-hidden">Profil LinkedIn</span>
            <FacebookIcon className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/olaf-sulich"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span className="visually-hidden">Profil LinkedIn</span>
            <LinkedInIcon className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
