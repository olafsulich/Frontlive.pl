import { memo, ReactNode } from 'react';
import styles from './link.module.scss';

type LinkProps = {
  children: ReactNode;
  href: string;
};

export const Link = memo(({ children, href }: LinkProps) => (
  <a href={href} className={styles.link}>
    {children}
  </a>
));
