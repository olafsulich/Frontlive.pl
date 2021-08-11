import { memo, ReactNode } from 'react';
import styles from './categories.module.scss';
import { Category as CategoryType } from '../../types/types';
import { Category } from './category/Category';

type CategoriesProps = {
  readonly categories: CategoryType[];
};

export const Categories = memo(({ categories }: CategoriesProps) => {
  return (
    <div className={styles.categories}>
      {categories.map(({ title, path }) => (
        <Category title={title} path={path} />
      ))}
    </div>
  );
});

Categories.displayName = 'Categories';
