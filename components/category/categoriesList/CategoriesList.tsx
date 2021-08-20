import { memo, ReactNode } from 'react';
import { Category as CategoryT } from '../../../types/types';
import styles from './categoriesList.module.scss';
import { CategoryCard } from './categoryCard/CategoryCard';

type CategoriesProps = {
  readonly categories: CategoryT[];
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
