import React from 'react';
import type { ActionImpl, ActionId } from 'kbar';
import cn from 'classnames';
import styles from './kbarItem.module.scss';

type KbarItemProps = {
  action: ActionImpl;
  active: boolean;
};

export const KbarItem = ({ action, active }: KbarItemProps) => {
  return (
    <div className={styles.itemWrapper}>
      <div
        className={cn(styles.item, {
          [styles.itemActive]: active,
        })}
      >
        {action.name}
      </div>
    </div>
  );
};
