import { memo, ReactNode } from 'react';
import styles from './postsListing.module.scss';
import { PostThumbnail } from './postThumbnail/PostThumbnail';

type PostThumbnailHeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
};

type PostsListingProps = {
  children: ReactNode;
  posts: Post[];
  headingTag?: PostThumbnailHeadingTag;
};

export const PostsListing = memo(({ children, posts, headingTag = 'h3' }: PostsListingProps) => {
  return (
    <section className={styles.wrapper}>
      {children}
      <div className={styles.postsWrapper}>
        {posts.map(({ slug, title, excerpt }) => (
          <PostThumbnail
            tag={headingTag}
            key={title}
            path={`/blog/${slug}`}
            heading={title}
            excerpt={excerpt}
          />
        ))}
      </div>
    </section>
  );
});
