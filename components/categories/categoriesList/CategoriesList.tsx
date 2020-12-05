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

type Tag = 'section' | 'div';

type CategoriesListProps = {
  categories: Category[];
  tag: Tag;
  label?: string;
};

export const CategoriesList = memo<CategoriesListProps>(
  ({ categories, tag: Tag = 'section', label }) => (
    <Tag className={styles.wrapper}>
      {label ? <h2 className="visually-hidden">{label}</h2> : null}
      {categories.map(({ title, path, image, variant }) => (
        <CategoryCard
          key={title}
          title={title}
          path={`/kategorie/${path}`}
          image={image}
          variant={variant}
        />
      ))}
    </Tag>
  ),
);
