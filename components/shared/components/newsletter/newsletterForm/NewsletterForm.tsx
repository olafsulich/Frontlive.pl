import styles from './newsletterForm.module.scss';
import cn from 'classnames';
import Link from 'next/link';

export const NewsletterForm = () => {
  return (
    <div className={styles.container}>
      <Link href="/newsletter">
        <a className={styles.button}>
          <span>Subskrybuj</span>
        </a>
      </Link>
    </div>
  );
};
