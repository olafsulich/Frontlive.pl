import { memo, ReactNode } from 'react';
import styles from './postsListing.module.scss';
import { PostThumbnail } from './postThumbnail/PostThumbnail';
import cn from 'classnames';

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
  primary?: boolean;
};

export const PostsListing = memo(
  ({ children, posts, headingTag = 'h3', primary = false }: PostsListingProps) => {
    return (
      <section className={styles.wrapper}>
        {children}
        <div className={cn(styles.postsWrapper, { [styles.primary]: primary })}>
          {posts.map(({ slug, title, excerpt }) => (
            <PostThumbnail
              tag={headingTag}
              key={title}
              path={`/blog/${slug}`}
              heading={title}
              excerpt={excerpt}
              primary={primary}
            />
          ))}
        </div>
      </section>
    );
  },
);
