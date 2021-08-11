import { memo } from 'react';
import styles from './socialLink.module.scss';

type SocialLinkProps = {
  href: string;
  icon: 'svg';
  label: string;
};

export const SocialLink = memo<SocialLinkProps>(({ href, icon: Icon, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>
    <span className="visually-hidden">{label}</span>
    <Icon className={styles.icon} />
  </a>
));

SocialLink.displayName = 'SocialLink';
