import { memo, ReactNode } from 'react';
import cn from 'classnames';
import type { Heading, Post } from '../../../types/types';
import styles from './featured.module.scss';

type FeaturedProps = {
  readonly posts: Post[];
};

export const Featured = memo(({ posts }: FeaturedProps) => {
  const { title, excerpt, category, image } = posts[0];
  const [, ...postsWithoutFirst] = posts;
  console.log(posts);

  return (
    <section className={styles.featured}>
      <article className={styles.featuredWrapper}>
        <div className={styles.featuredImageWrapper}>
          <img className={styles.featuredImage} src={image} alt="" />
        </div>
        <div className={styles.featuredContent}>
          <span className={styles.featuredInfo}>{category}</span>
          <h2 className={styles.featuredHeading}>{title}</h2>
          <p className={styles.featuredExcerpt}>{excerpt}</p>
        </div>
      </article>
      <div className={styles.articlesWrapper}>
        {postsWithoutFirst.map(({ title, excerpt, category, image }) => (
          <article className={styles.articleWrapper}>
            <div className={styles.articleImageWrapper}>
              <img className={styles.articleImage} src={image} alt="" />
            </div>
            <div className={styles.articleContent}>
              <span className={styles.articleInfo}>{category}</span>
              <h2 className={styles.articleHeading}>{title}</h2>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
});

Featured.displayName = 'PostsListing';
