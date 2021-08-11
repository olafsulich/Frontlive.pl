import Link from 'next/link';
import { Category as CategoryType } from '../../../types/types';
import styles from './category.module.scss';

export const Category = ({ title, path }: CategoryType) => {
  return (
    <Link href={path}>
      <a className={styles.category}>{title}</a>
    </Link>
  );
};
