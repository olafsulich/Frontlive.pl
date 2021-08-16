import { memo, ReactNode } from 'react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import slugify from 'slugify';
import cn from 'classnames';
import type { PostFrontmatter } from '../../types/types';
import styles from './mdx.module.scss';
import { Heading } from '../shared/components/heading/Heading';
import { Sparkles } from '../shared/components/sparkles/Sparkles';
import { Image } from './image/Image';

type MdxProps = {
  readonly frontmatter: PostFrontmatter;
  readonly children: ReactNode;
};

export const customMdxComponents = {
  Sparkles,
  Image,
};

export const Mdx = memo<MdxProps>(({ frontmatter, children }) => {
  const { title } = frontmatter;
  return (
    <article className={styles.wrapper}>
      <div className={cn(styles.content, 'content')}>
        <header className={styles.header} id="main">
          <Link href={`/kategorie/${slugify(frontmatter.category, { lower: true })}`}>
            <a className={cn(styles.category, 'categoryLink')}>
              <span className="visually-hidden">Kategoria:</span>
              <span>{frontmatter.category}</span>
            </a>
          </Link>
          <Heading tag="h1" variant="secondary" className={styles.heading}>
            {title}
          </Heading>
        </header>
        {children}
      </div>
    </article>
  );
});

Mdx.displayName = 'Mdx';
