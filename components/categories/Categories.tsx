import { memo } from 'react';
import { Heading } from 'components/shared/components/heading/Heading';
import { CategoriesList } from './categoriesList/CategoriesList';
import type { Category } from '../../types/types';
import styles from './categories.module.scss';

type CategoriesProps = {
  readonly categories: Category[];
};

export const Categories = memo<CategoriesProps>(({ categories }) => {
  return (
    <main className={styles.wrapper} id="main">
      <Heading tag="h1" variant="primary" className={styles.heading}>
        Kategorie
      </Heading>
      <CategoriesList tag="div" categories={categories} />
    </main>
  );
});

Categories.displayName = 'Categories';
