import Image from 'next/image';
import styles from './hero.module.scss';
import cn from 'classnames';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroImage}>
        <Image
          src="/images/olaf-head-santa.png"
          alt="Olaf Sulich"
          width="502"
          height="414"
          quality={100}
          priority
        />
      </div>
      <h1 className="visually-hidden">Olaf Sulich</h1>
      <span aria-hidden="true" className={cn(styles.name, styles.namePrimary)}>
        Olaf
      </span>
      <span aria-hidden="true" className={cn(styles.name, styles.nameSecondary)}>
        Sulich
      </span>
    </div>
  );
};
