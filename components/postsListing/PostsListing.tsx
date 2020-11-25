import { memo } from 'react';
import styles from './postsListing.module.scss';
import PostThumbnail from './postThumbnail/PostThumbnail';

type PostsListingProps = {
  heading: string;
};

const PostsListing = memo(({ heading }: PostsListingProps) => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.postsWrapper}>
        <PostThumbnail
          path="/"
          heading="Nowoczesny CSS - min(), max() i clamp()"
          excerpt="I recently got the following message in a DM: I’ve been building with HTML and CSS for years, and I still don’t know how to implement pixel-perfect designs"
        />
        <PostThumbnail
          path="/"
          heading="Nowoczesny CSS - min(), max() i clamp()"
          excerpt="I recently got the following message in a DM: I’ve been building with HTML and CSS for years, and I still don’t know how to implement pixel-perfect designs"
        />
        <PostThumbnail
          path="/"
          heading="Nowoczesny CSS - min(), max() i clamp()"
          excerpt="I recently got the following message in a DM: I’ve been building with HTML and CSS for years, and I still don’t know how to implement pixel-perfect designs"
        />
      </div>
    </section>
  );
});

export default PostsListing;
