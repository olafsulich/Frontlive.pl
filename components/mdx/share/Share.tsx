import styles from './share.module.scss';
import Image from 'next/image';
import LinkedInIcon from '../../../public/icons/linkedin.svg';
import TwitterIcon from '../../../public/icons/twitter.svg';
import FacebookIcon from '../../../public/icons/facebook.svg';
import { SocialLink } from '../../autor/socialLinks/socialLink/SocialLink';

export const Share = () => {
  const href = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);

  const socialLinksData = [
    {
      href: `https://www.facebook.com/sharer.php?u=${href}`,
      icon: FacebookIcon,
      label: 'Na Facebooku',
    },
    {
      href: `https://twitter.com/share?url=${href}&text=${title}&hashtags=frontlive`,
      icon: TwitterIcon,
      label: 'Na Twitterze',
    },
    {
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${href}`,
      icon: LinkedInIcon,
      label: 'Na Linkedinie',
    },
  ];

  return (
    <article className={styles.wrapper}>
      <h2 className="visually-hidden">Podziel się artykułem</h2>
      <div className={styles.image}>
        <Image src="/images/rocket.png" alt="" width={150} height={150} />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Udostępnij:
          <span className={styles.icons}>
            {socialLinksData.map(({ href, icon, label }) => (
              <SocialLink key={label} href={href} icon={icon} label={label} />
            ))}
          </span>
          <span className={styles.links}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.facebook.com/sharer.php?u=${href}`}
              className="share"
            >
              Facebook
            </a>{' '}
            |{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/share?url=${href}&text=${title}&hashtags=frontlive`}
              className="share"
            >
              Twitter
            </a>{' '}
            |{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${href}`}
              className="share"
            >
              Linkedin
            </a>
          </span>
        </p>
      </div>
    </article>
  );
};
