import { memo } from 'react';
import cn from 'classnames';
import { Heading } from '../shared/components/heading/Heading';
import type { Post } from '../../types/types';
import styles from './category.module.scss';
import { PostsListing } from '../blog/postsListing/PostsListing';

type CategoryProps = {
  readonly posts: Post[];
  readonly category: string;
};

export const Category = memo<CategoryProps>(({ posts, category }) => (
  <main className={styles.wrapper} id="main">
    <Heading tag="h1" variant="primary">
      {category}
    </Heading>
    <section className={styles.wrapper}>
      <div className={cn(styles.postsWrapper, styles.postsWrapperPrimary)}>
        <PostsListing posts={posts} />
      </div>
    </section>
  </main>
));

Category.displayName = 'Blog';
