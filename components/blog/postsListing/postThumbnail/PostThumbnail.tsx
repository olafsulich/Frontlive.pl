import { memo } from 'react';
import Link, { LinkProps } from 'next/link';
import styles from './postThumbnail.module.scss';
import ArrowRightIcon from '../../../../public/icons/arrow-right.svg';

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type PostThumbnailProps = {
  path: LinkProps['href'];
  heading: string;
  excerpt: string;
  tag?: Tag;
};

export const PostThumbnail = memo<PostThumbnailProps>(
  ({ path, heading, excerpt, tag: Tag = 'h3' }) => {
    return (
      <article className={styles.wrapper}>
        <Link href={path}>
          <a className={styles.link}>
            <Tag className={styles.heading}>{heading}</Tag>
            <p className={styles.text}>{excerpt}</p>
            <p className={styles.readMore}>
              Czytaj więcej <ArrowRightIcon className={styles.icon} />
            </p>
          </a>
        </Link>
      </article>
    );
  },
);
