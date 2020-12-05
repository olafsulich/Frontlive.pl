import { memo } from 'react';
import { Heading } from 'components/shared/components/heading/Heading';
import { CategoriesList } from './categoriesList/CategoriesList';
import styles from './categories.module.scss';

type Variant = 'blue' | 'green' | 'orange' | 'yellow' | 'purple' | 'black';

type Category = {
  title: string;
  path: string;
  image: string;
  variant: Variant;
};

type CategoriesProps = {
  categories: Category[];
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
