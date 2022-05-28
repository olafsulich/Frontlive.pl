import { memo, ReactNode } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import slugify from 'slugify';
import cn from 'classnames';
import type { Post, PostFrontmatter } from '../../types/types';
import styles from './mdx.module.scss';
import { Heading } from '../shared/components/heading/Heading';
import { Heading as MDXHeading } from './heading/Heading';
import Image from 'next/image';
import { Info } from './info/Info';
import { PostsListing } from '../blog/postsListing/PostsListing';
import { getPostsByCategory } from '../../lib/posts';

// @ts-ignore
const Share = dynamic(() => import('./share/Share').then((c) => c.Share), {
  ssr: false,
});

// @ts-ignore
const Edit = dynamic(() => import('./edit/Edit').then((c) => c.Edit), {
  ssr: false,
});

type MdxProps = {
  readonly frontmatter: PostFrontmatter;
  readonly children: ReactNode;
  readonly recommendedPosts: {
    posts: Post[];
    containsMultiplePostsInCategory: boolean;
  };
};

export const Mdx = memo<MdxProps>(({ frontmatter, children, recommendedPosts }) => {
  const { title, image } = frontmatter;

  return (
    <article className={styles.wrapper}>
      <header className={styles.header} id="main">
        <Link href={`/kategorie/${slugify(frontmatter.category, { lower: true })}`}>
          <a className={cn(styles.category, 'categoryLink')}>
            <span className="visually-hidden">Kategoria:</span>
            <span>{frontmatter.category}</span>
          </a>
        </Link>
        <Heading
          beforeContent={frontmatter.category}
          tag="h1"
          variant="secondary"
          className={styles.heading}
        >
          {title}
        </Heading>
        <div className={styles.image}>
          <Image width={1200} height={628} src={image} alt="" />
        </div>
        <Info frontmatter={frontmatter} />
      </header>
      <section
        aria-label="Rekomendowane artykuły, udostępnij i feedback"
        className={cn(styles.content, 'content')}
      >
        {children}
        <div className={styles.recommended}>
          <div className={styles.recommendedImage}>
            <Image src="/images/newspaper.png" alt="" width={150} height={150} />
          </div>
          <h2 className={styles.recommendedHeading}>
            Czytaj więcej{' '}
            {recommendedPosts.containsMultiplePostsInCategory && (
              <>
                w <q>{frontmatter.category}</q>
              </>
            )}
          </h2>
          <div className={styles.recommendedPosts}>
            <PostsListing posts={recommendedPosts.posts} variant="recommended" />
          </div>
        </div>
        {/* <Share /> */}
        <Edit />
      </section>
    </article>
  );
});

Mdx.displayName = 'Mdx';
