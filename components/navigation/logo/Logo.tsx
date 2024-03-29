import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import styles from './logo.module.scss';

export const Logo = ({ lazy = false }: { lazy?: boolean }) => {
  return (
    <Link href="/" passHref>
      <a className={styles.link}>
        <div className={cn(styles.logo, styles.logoBig)}>
          <Image src="/images/logo-big.png" alt="" width={222} height={39} priority={!lazy} />
        </div>
        <div className={cn(styles.logo, styles.logoSmall)}>
          <Image src="/images/logo-small.png" alt="" width={170} height={35} priority={!lazy} />
        </div>
        <span className="visually-hidden">Frontlive.pl by Olaf Sulich</span>
      </a>
    </Link>
  );
};
