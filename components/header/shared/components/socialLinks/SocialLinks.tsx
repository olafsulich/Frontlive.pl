import styles from './socialLinks.module.scss';
import GitHubIcon from '../../../../../public/icons/github.svg';
import LinkedInIcon from '../../../../../public/icons/linkedin.svg';
import TwitterIcon from '../../../../../public/icons/twitter.svg';

const SocialLinks = () => {
  return (
    <div className={styles.wrapper}>
      <GitHubIcon className={styles.icon} />
      <LinkedInIcon className={styles.icon} />
      <TwitterIcon className={styles.icon} />
    </div>
  );
};

export default SocialLinks;
