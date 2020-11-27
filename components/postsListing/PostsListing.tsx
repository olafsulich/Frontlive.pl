import { memo, ReactNode } from 'react';
import styles from './postsListing.module.scss';
import PostThumbnail from './postThumbnail/PostThumbnail';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
};

type PostsListingProps = {
  children: ReactNode;
  posts: Post[];
};

const PostsListing = memo(({ children, posts }: PostsListingProps) => {
  return (
    <section className={styles.wrapper}>
      {children}
      <div className={styles.postsWrapper}>
        {posts.map(({ slug, title, excerpt }) => (
          <PostThumbnail key={title} path={`/blog/${slug}`} heading={title} excerpt={excerpt} />
        ))}
      </div>
    </section>
  );
});

export default PostsListing;
