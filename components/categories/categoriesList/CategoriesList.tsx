import { memo } from 'react';
import { CategoryCard } from '../categoryCard/CategoryCard';
import styles from './categoriesList.module.scss';

type Variant = 'blue' | 'green' | 'orange' | 'yellow' | 'purple' | 'black';

type Category = {
  title: string;
  path: string;
  image: string;
  variant: Variant;
};

type CategoriesListProps = {
  categories: Category[];
};

export const CategoriesList = memo<CategoriesListProps>(({ categories }) => (
  <div className={styles.wrapper}>
    {categories.map(({ title, path, image, variant }) => (
      <CategoryCard
        key={title}
        title={title}
        path={`/kategorie/${path}`}
        image={image}
        variant={variant}
      />
    ))}
  </div>
));
