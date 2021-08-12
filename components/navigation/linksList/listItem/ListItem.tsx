import { memo } from 'react';
import Link from 'next/link';
import styles from './listItem.module.scss';
import { useHeaderState } from '../../../shared/context/HeaderContext';

type ListItemProps = {
  title: string;
  href: string;
};

export const ListItem = memo<ListItemProps>(({ title, href }) => {
  const { closeMenu } = useHeaderState();
  return (
    <li className={styles.item}>
      <Link href={href}>
        <a onClick={closeMenu} className={styles.link}>
          {title}
        </a>
      </Link>
    </li>
  );
});

ListItem.displayName = 'ListItem';
