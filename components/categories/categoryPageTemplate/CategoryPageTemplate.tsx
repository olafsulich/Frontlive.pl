import { memo } from 'react';
import { PostsListing } from '../../blog/postsListing/PostsListing';
import { Heading } from 'components/shared/components/heading/Heading';
import styles from './categoryPageTemplate.module.scss';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
};

type CategoryPageTemplateProps = {
  posts: Post[];
  category: string;
};

export const CategoryPageTemplate = memo<CategoryPageTemplateProps>(({ posts, category }) => (
  <main className={styles.wrapper}>
    <PostsListing posts={posts}>
      <Heading tag="h1" variant="primary" className={styles.heading}>
        {category}
      </Heading>
    </PostsListing>
  </main>
));
