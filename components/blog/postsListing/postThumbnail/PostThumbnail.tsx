import { memo } from 'react';
import Link, { LinkProps } from 'next/link';
import cn from 'classnames';
import ArrowRightIcon from '../../../../public/icons/arrow-right.svg';
import type { Heading } from '../../../../types/types';
import styles from './postThumbnail.module.scss';
import { polishPlurals } from 'polish-plurals';

type PostThumbnailProps = {
  path: LinkProps['href'];
  heading: string;
  excerpt: string;
  tag?: Heading;
  image: string;
  category: string;
  timeToRead: number;
  variant?: 'listing' | 'recommended';
};

export const PostThumbnail = memo<PostThumbnailProps>(
  ({
    path,
    heading,
    excerpt,
    tag: Tag = 'h3',
    image,
    category,
    timeToRead,
    variant = 'listing',
  }) => {
    const formattedReadingTime = polishPlurals('minuta', 'minuty', 'minut', Math.round(timeToRead));

    return (
      <article
        className={cn(styles.wrapper, {
          [styles.wrapperRecommended]: variant === 'recommended',
        })}
      >
        <Link href={path}>
          <a className={styles.link}>
            {variant === 'listing' && (
              <div className={styles.imageWrapper}>
                <img className={styles.image} src={image} alt="" />
              </div>
            )}
            <div className={styles.content}>
              <span className={styles.info}>
                {category} &nbsp; | &nbsp; {Math.round(timeToRead)} {formattedReadingTime} czytania
              </span>
              <Tag className={styles.heading}>{heading}</Tag>
            </div>
          </a>
        </Link>
      </article>
    );
  },
);

PostThumbnail.displayName = 'PostThumbnail';
