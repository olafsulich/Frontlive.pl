import { memo } from 'react';
import Link, { LinkProps } from 'next/link';
import cn from 'classnames';
import ArrowRightIcon from '../../../../public/icons/arrow-right.svg';
import type { Heading } from '../../../../types/types';
import styles from './postThumbnail.module.scss';

type PostThumbnailProps = {
  path: LinkProps['href'];
  heading: string;
  excerpt: string;
  tag?: Heading;
  isPrimary?: boolean;
};

export const PostThumbnail = memo<PostThumbnailProps>(
  ({ path, heading, excerpt, tag: Tag = 'h3', isPrimary = false }) => {
    return (
      <article className={cn(styles.wrapper, { [styles.primary]: isPrimary })}>
        <Link href={path}>
          <a className={styles.link}>
            <Tag className={styles.heading}>{heading}</Tag>
            <p className={styles.text}>{excerpt}</p>
          </a>
        </Link>
      </article>
    );
  },
);

PostThumbnail.displayName = 'PostThumbnail';
