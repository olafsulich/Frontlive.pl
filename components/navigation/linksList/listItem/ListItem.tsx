import { memo } from 'react';
import Link from 'next/link';
import styles from './listItem.module.scss';

type ListItemProps = {
  title: string;
  href: string;
};

export const ListItem = memo<ListItemProps>(({ title, href }) => (
  <li className={styles.item}>
    <Link href={href}>
      <a className={styles.link}>{title}</a>
    </Link>
  </li>
));

ListItem.displayName = 'ListItem';
