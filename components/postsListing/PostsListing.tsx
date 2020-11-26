import { memo, ReactNode } from 'react';
import styles from './postsListing.module.scss';
import PostThumbnail from './postThumbnail/PostThumbnail';

type PostsListingProps = {
  children: ReactNode;
};

const PostsListing = memo(({ children }: PostsListingProps) => {
  return (
    <section className={styles.wrapper}>
      {children}
      <div className={styles.postsWrapper}>
        <PostThumbnail
          path="/blog/first"
          heading="Nowoczesny CSS - min(), max() i clamp()"
          excerpt="I recently got the following message in a DM: I’ve been building with HTML and CSS for years, and I still don’t know how to implement pixel-perfect designs"
        />
        <PostThumbnail
          path="/"
          heading="Dostępność - czytniki ekranowe i testowanie"
          excerpt="I recently got the following message in a DM: I’ve been building with HTML and CSS for years, and I still don’t know how to implement pixel-perfect designs"
        />
        <PostThumbnail
          path="/"
          heading="TypeScript - React, Redux i Styled Components"
          excerpt="Earlier this year, I developed Cubital Tunnel Syndrome, a repetitive-strain injury, in both of my elbows. As a result, I pretty much can't use a mouse or keyboard; after a few minutes, I get a burning pain shooting down my arms."
        />
      </div>
    </section>
  );
});

export default PostsListing;
