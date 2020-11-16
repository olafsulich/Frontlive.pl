import Link from 'next/link';
import styles from './linksList.module.scss';

const LinksList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link href="/">
          <a className={styles.link}>Strona główna</a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/">
          <a className={styles.link}>Artykuły</a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/">
          <a className={styles.link}>Portfolio</a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/">
          <a className={styles.link}>O mnie</a>
        </Link>
      </li>
    </ul>
  );
};

export default LinksList;
