import { memo, ReactNode } from 'react';
import styles from './categories.module.scss';
import { Category as CategoryType } from '../../../types/types';
import { CategoryCard } from './categoryCard/CategoryCard';

type CategoriesProps = {
  readonly categories: CategoryType[];
};

export const CategoriesList = memo(({ categories }: CategoriesProps) => {
  return (
    <div className={styles.categories}>
      {categories.map(({ title, path }) => (
        <CategoryCard key={title} title={title} path={path} />
      ))}
    </div>
  );
});

CategoriesList.displayName = 'Categories';
