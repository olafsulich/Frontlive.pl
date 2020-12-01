import styles from './socialLinks.module.scss';
import GitHubIcon from '../../../../public/icons/github.svg';
import LinkedInIcon from '../../../../public/icons/linkedin.svg';
import TwitterIcon from '../../../../public/icons/twitter.svg';
import { SocialLink } from './socialLink/SocialLink';

export const SocialLinks = () => {
  return (
    <div className={styles.wrapper}>
      <SocialLink
        href="https://github.com/olafsulich"
        icon={GitHubIcon}
        label="Repozytorium na GitHubie"
      />
      <SocialLink
        href="https://www.linkedin.com/in/olaf-sulich"
        icon={LinkedInIcon}
        label="Profil LinkedIn"
      />
      <SocialLink
        href="https://twitter.com/sulich_olaf"
        icon={TwitterIcon}
        label="Konto na Twitterze"
      />
    </div>
  );
};
