import styles from './workshop.module.scss';
import FacebookLogo from '../../public/icons/facebook-logo.svg';
import LikeIcon from '../../public/icons/like.svg';
import BlobIcon from '../../public/icons/blob.svg';
import DotsIcon from '../../public/icons/dots.svg';

export const Workshop = () => {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <h2 className={styles.logo}>
          <FacebookLogo aria-hidden="true" />
          <span className="visually-hidden" id="workshop">
            Frontlive na Facebooku
          </span>
        </h2>
        <a
          className={styles.link}
          href="https://www.facebook.com/frontlivepl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LikeIcon />
          <span className={styles.linkText}>Lubię to!</span>
        </a>
      </div>
      <BlobIcon aria-hidden="true" className={styles.blob} />
      <DotsIcon aria-hidden="true" className={styles.dotsFirst} />
      <DotsIcon aria-hidden="true" className={styles.dotsSecond} />
    </aside>
  );
};
