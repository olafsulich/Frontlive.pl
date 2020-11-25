import { memo } from 'react';
import Link, { LinkProps } from 'next/link';
import styles from './postThumbnail.module.scss';

type PostThumbnailProps = {
  path: LinkProps['href'];
  heading: string;
  excerpt: string;
};

const PostThumbnail = memo<PostThumbnailProps>(({ path, heading, excerpt }) => {
  return (
    <article className={styles.wrapper}>
      <Link href={path}>
        <a className={styles.link}>
          <h3 className={styles.heading}>{heading}</h3>
          <p className={styles.text}>{excerpt}</p>
        </a>
      </Link>
    </article>
  );
});

export default PostThumbnail;
