import { memo } from 'react';
import { ActiveLink } from '../../activeLink/ActiveLink';
import styles from './listItem.module.scss';

type ListItemProps = {
  title: string;
  href: string;
};

export const ListItem = memo<ListItemProps>(({ title, href }) => (
  <li className={styles.item}>
    <ActiveLink href={href} activeClassName={styles.activeLink}>
      <a className={styles.link}>{title}</a>
    </ActiveLink>
  </li>
));
