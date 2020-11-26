import { memo, ReactNode } from 'react';
import styles from './link.module.scss';

type LinkProps = {
  children: ReactNode;
  href: string;
};

const Link = memo(({ children, href }: LinkProps) => {
  return (
    <a href={href} className={styles.link}>
      {children}
    </a>
  );
});

export default Link;
