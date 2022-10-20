import { memo } from 'react';
import styles from './featuredPost.module.scss';
import { polishPlurals } from 'polish-plurals';
import Link, { LinkProps } from 'next/link';
import type { Heading } from '../../../../types/types';
import Image from 'next/image';

type FeaturedPostProps = {
  path: LinkProps['href'];
  heading: string;
  excerpt: string;
  tag?: Heading;
  image: string;
  category: string;
  timeToRead: number;
};

export const FeaturedPost = memo<FeaturedPostProps>(
  ({ path, heading, excerpt, tag: Tag = 'h3', image, category, timeToRead }) => {
    const formattedReadingTime = polishPlurals('minuta', 'minuty', 'minut', Math.round(timeToRead));

    return (
      <article className={styles.wrapper}>
        <Link href={path}>
          <a className={styles.link}>
            {/* <div className={styles.crown}>
              <Image src="/images/crown.png" alt="" width={100} height={100} quality={100} />
            </div> */}
            <div className={styles.imageWrapper}>
              <img className={styles.image} src={image} alt="" />
            </div>
            <div className={styles.content}>
              <span className={styles.info}>
                {category} &nbsp; | &nbsp;&nbsp;{Math.round(timeToRead)} {formattedReadingTime}{' '}
                czytania
              </span>{' '}
              <h2 className={styles.heading}>{heading}</h2>
              <p className={styles.excerpt}>{excerpt}</p>
            </div>
          </a>
        </Link>
      </article>
    );
  },
);
