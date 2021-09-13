import { memo, ReactNode } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { MDXRemote } from 'next-mdx-remote';
import slugify from 'slugify';
import cn from 'classnames';
import type { PostFrontmatter } from '../../types/types';
import styles from './mdx.module.scss';
import { Heading } from '../shared/components/heading/Heading';
import { polishPlurals } from 'polish-plurals';
import Image from 'next/image';
import { Info } from './info/Info';

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
};

export const Mdx = memo<MdxProps>(({ frontmatter, children }) => {
  const { title } = frontmatter;
  
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
        <Info frontmatter={frontmatter} />
      </header>
      <div className={cn(styles.content, 'content')}>
        {children}
        <Share />
        <Edit />
      </div>
    </article>
  );
});

Mdx.displayName = 'Mdx';
