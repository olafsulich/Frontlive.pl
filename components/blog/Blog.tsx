import { memo } from 'react';
import cn from 'classnames';
import { PostsListing } from './postsListing/PostsListing';
import { Heading } from '../shared/components/heading/Heading';
import type { Category, Post } from '../../types/types';
import styles from './blog.module.scss';
import { Categories } from '../categories/Categories';

type BlogProps = {
  readonly posts: Post[];
  readonly categories: Category[];
};

export const Blog = memo<BlogProps>(({ posts, categories }) => (
  <main className={styles.wrapper} id="main">
    <Heading tag="h1" variant="primary">
      Artykuły
    </Heading>
    <Categories categories={categories} />
    <section className={styles.wrapper}>
      <div className={cn(styles.postsWrapper, styles.postsWrapperPrimary)}>
        <PostsListing posts={posts} isPrimary={true} />
      </div>
    </section>
  </main>
));

Blog.displayName = 'Blog';
