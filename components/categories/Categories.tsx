import { memo } from 'react';
import styles from './categories.module.scss';
import CategoryCard from './categoryCard/CategoryCard';

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

const Courses = memo<CategoriesProps>(({ categories }) => {
  return (
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
  );
});

export default Courses;
