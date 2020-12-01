import Link from 'next/link';
import styles from './logo.module.scss';

export const Logo = () => {
  return (
    <Link href="/">
      <a className={styles.link}>
        <img src="/images/logo.png" alt="" className={styles.logo} />
        <span className="visually-hidden">Frontlive.pl</span>
      </a>
    </Link>
  );
};
