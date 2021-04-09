import styles from './workshop.module.scss';
import InstagramLogo from '../../public/icons/instagram-logo.svg';
import LikeIcon from '../../public/icons/like.svg';
import BlobIcon from '../../public/icons/blob-1.svg';
import DotsIcon from '../../public/icons/dots.svg';

export const Workshop = () => {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <h2 className={styles.logo}>
          <InstagramLogo aria-hidden="true" />
          <span className="visually-hidden" id="workshop">
            Frontlive na Instagramie
          </span>
        </h2>
        <a
          className={styles.link}
          href="https://www.instagram.com/frontlive.pl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.linkText}>Obserwuj!</span>
        </a>
      </div>
      <BlobIcon aria-hidden="true" className={styles.blob} />
      <DotsIcon aria-hidden="true" className={styles.dotsFirst} />
      <DotsIcon aria-hidden="true" className={styles.dotsSecond} />
    </aside>
  );
};
