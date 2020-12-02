import Image from 'next/image';
import Link from 'next/link';
import styles from './logo.module.scss';

export const Logo = () => {
  return (
    <Link href="/">
      <a className={styles.link}>
        <Image
          src="/images/logo.png"
          alt=""
          className={styles.logo}
          width={35}
          height={35}
          priority={true}
          quality={100}
          layout="fixed"
        />
        <span className="visually-hidden">Frontlive.pl by Olaf Sulich</span>
      </a>
    </Link>
  );
};
