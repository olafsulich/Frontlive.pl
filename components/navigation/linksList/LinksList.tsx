import { memo } from 'react';
import ActiveLink from '../activeLink/ActiveLink';
import styles from './linksList.module.scss';
import cn from 'classnames';
import { useHeaderState } from '../../shared/context/HeaderContext';

const LinksList = memo(() => {
  const { isMenuVisible } = useHeaderState();

  return (
    <ul className={cn(styles.list, { [styles.active]: !isMenuVisible })}>
      <li className={styles.item}>
        <ActiveLink href="/" activeClassName={styles.activeLink}>
          <a className={styles.link}>Strona główna</a>
        </ActiveLink>
      </li>
      <li className={styles.item}>
        <ActiveLink href="/blog" activeClassName={styles.activeLink}>
          <a className={styles.link}>Artykuły</a>
        </ActiveLink>
      </li>
      <li className={styles.item}>
        <ActiveLink href="/kursy" activeClassName={styles.activeLink}>
          <a className={styles.link}>Kursy</a>
        </ActiveLink>
      </li>
      <li className={styles.item}>
        <ActiveLink href="/portfolio" activeClassName={styles.activeLink}>
          <a className={styles.link}>Portfolio</a>
        </ActiveLink>
      </li>
      <li className={styles.item}>
        <ActiveLink href="/o-mnie" activeClassName={styles.activeLink}>
          <a className={styles.link}>O mnie</a>
        </ActiveLink>
      </li>
    </ul>
  );
});

export default LinksList;
