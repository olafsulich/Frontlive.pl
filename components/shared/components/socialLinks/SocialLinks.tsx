import styles from './socialLinks.module.scss';
import GitHubIcon from '../../../../public/icons/github.svg';
import LinkedInIcon from '../../../../public/icons/linkedin.svg';
import TwitterIcon from '../../../../public/icons/twitter.svg';

const SocialLinks = () => {
  return (
    <div className={styles.wrapper}>
      <a
        href="https://github.com/olafsulich"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <span className="visually-hidden">Repozytorium na GitHubie</span>
        <GitHubIcon className={styles.icon} />
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
      <a
        href="https://twitter.com/sulich_olaf"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <span className="visually-hidden">Konto na Twitterze</span>
        <TwitterIcon className={styles.icon} />
      </a>
    </div>
  );
};

export default SocialLinks;
