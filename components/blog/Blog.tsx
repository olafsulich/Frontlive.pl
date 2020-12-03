import { memo } from 'react';
import { PostsListing } from './postsListing/PostsListing';
import { Heading } from 'components/shared/components/heading/Heading';
import styles from './blog.module.scss';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
};

type BlogProps = {
  posts: Post[];
};

export const Blog = memo<BlogProps>(({ posts }) => (
    <main className={styles.wrapper}>
      <PostsListing headingTag="h2" posts={posts}>
        <Heading tag="h1" variant="primary" className={styles.heading}>
          Artykuły
        </Heading>
      </PostsListing>
    </main>
  ));
