import styles from './socialLinks.module.scss';
import GitHubIcon from '../../../../public/icons/github.svg';
import LinkedInIcon from '../../../../public/icons/linkedin.svg';
import TwitterIcon from '../../../../public/icons/twitter.svg';
import FacebookIcon from '../../../../public/icons/facebook.svg';
import InstagramIcon from '../../../../public/icons/instagram.svg';
import { SocialLink } from './socialLink/SocialLink';

const socialLinksData = [
  {
    href: 'https://www.instagram.com/frontlive.pl/',
    icon: InstagramIcon,
    label: 'Konto na Instagramie',
  },
  {
    href: 'https://www.facebook.com/frontlivepl',
    icon: FacebookIcon,
    label: 'Strona na Facebooku',
  },
  {
    href: 'https://www.linkedin.com/in/olaf-sulich',
    icon: LinkedInIcon,
    label: 'Profil LinkedIn',
  },
  { href: 'https://twitter.com/sulich_olaf', icon: TwitterIcon, label: 'Konto na Twitterze' },
  { href: 'https://github.com/olafsulich', icon: GitHubIcon, label: 'Repozytorium na GitHubie' },
];

export const SocialLinks = () => {
  return (
    <div className={styles.wrapper}>
      {socialLinksData.map(({ href, icon, label }) => (
        <SocialLink key={label} href={href} icon={icon} label={label} />
      ))}
    </div>
  );
};
