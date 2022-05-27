import React from 'react';
import { KBarSearch } from 'kbar';
import SearchIcon from '../../../../public/icons/search.svg';
import styles from './kbarInput.module.scss';

export const KbarInput = () => {
  return (
    <label className={styles.wrapper}>
      <span className="visually-hidden">Wyszukaj artykuły</span>
      <SearchIcon className={styles.icon} />
      <KBarSearch defaultPlaceholder="Szukaj" className={styles.search} />
    </label>
  );
};
