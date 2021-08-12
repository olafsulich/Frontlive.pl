import Link from 'next/link';
import DiscordIcon from '../../public/icons/discord.svg';
import styles from './community.module.scss';

export const Community = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Dołącz do społeczności!</h2>
        <p className={styles.text}>W kupie raźniej!</p>
      </div>
      <a href="/" className={styles.link}>
        <DiscordIcon className={styles.icon} />
        Wchodzę
      </a>
    </section>
  );
};
