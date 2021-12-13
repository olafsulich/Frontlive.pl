import { memo } from 'react';
import cn from 'classnames';
import { useHeaderState } from '../../shared/context/HeaderContext';
import { ListItem } from '../linksList/listItem/ListItem';
import styles from './linksList.module.scss';

export const LinksList = memo(() => {
  const { isMenuVisible } = useHeaderState();

  return (
    <ul className={cn(styles.list, { [styles.active]: isMenuVisible })} id="navigation">
      <ListItem title="Strona główna" href="/" />
      <ListItem title="Artykuły" href="/blog" />
      <ListItem title="Społeczność" href="https://discord.gg/XTRkJXwCU9" />
      <ListItem title="O mnie" href="/o-mnie" />
      <ListItem title="Newsletter" href="/newsletter" />
    </ul>
  );
});

LinksList.displayName = 'LinksList';
