import Image from 'next/image';
import Link from 'next/link';
import styles from './logo.module.scss';

export const Logo = () => {
  return (
    <Link href="/">
      <a className={styles.link}>
        <picture className={styles.logo}>
          <source
            className={styles.logo}
            srcSet={require(`../../../public/images/logo.png?webp`)}
            type="image/webp"
          />
          <img src="/images/logo.png" alt="" width="35" height="35" className={styles.logo} />
        </picture>
        <span className="visually-hidden">Frontlive.pl by Olaf Sulich</span>
      </a>
    </Link>
  );
};
