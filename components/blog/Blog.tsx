import { memo } from 'react';
import cn from 'classnames';
import { PostsListing } from './postsListing/PostsListing';
import { Heading } from '../shared/components/heading/Heading';
import type { Category, Post } from '../../types/types';
import styles from './blog.module.scss';
import { CategoriesList } from '../category/categoriesList/CategoriesList';
import { FeaturedPost } from './postsListing/featuredPost/FeaturedPost';

type BlogProps = {
  readonly posts: Post[];
  readonly categories: Category[];
};

export const Blog = memo<BlogProps>(({ posts, categories }) => {
  const { title, excerpt, category, image, slug, timeToRead } = posts[0];
  const [, ...postsWithoutFirst] = posts;
  return (
    <main className={styles.wrapper} id="main">
      <Heading tag="h1" variant="primary">
        Artykuły
      </Heading>
      <CategoriesList categories={categories} />
      <section className={styles.wrapper}>
        <FeaturedPost
          key={title}
          path={`/blog/${slug}`}
          heading={title}
          excerpt={excerpt}
          category={category}
          image={image}
          timeToRead={timeToRead}
        />
        <div className={cn(styles.postsWrapper, styles.postsWrapperPrimary)}>
          <PostsListing posts={postsWithoutFirst} isPrimary={true} />
        </div>
      </section>
    </main>
  );
});

Blog.displayName = 'Blog';
