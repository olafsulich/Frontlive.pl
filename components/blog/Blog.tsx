import { memo } from 'react';
import cn from 'classnames';
import { PostsListing } from './postsListing/PostsListing';
import { Heading } from '../shared/components/heading/Heading';
import type { Post } from '../../types/types';
import styles from './blog.module.scss';

type BlogProps = {
  readonly posts: Post[];
};

export const Blog = memo<BlogProps>(({ posts }) => (
  <main className={styles.wrapper} id="main">
    <Heading tag="h1" variant="primary" className={styles.heading}>
      Artykuły
    </Heading>
    <section className={styles.wrapper}>
      <div className={cn(styles.postsWrapper, styles.postsWrapperPrimary)}>
        <PostsListing posts={posts} isPrimary={true}></PostsListing>
      </div>
    </section>
  </main>
));

Blog.displayName = 'Blog';
