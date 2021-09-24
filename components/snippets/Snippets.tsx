import { memo } from 'react';
import cn from 'classnames';
import { Heading } from '../shared/components/heading/Heading';
import styles from './snippets.module.scss';
import type { Snippet as SnippetType } from '../../types/types';
import matter from 'gray-matter';
import remarkCodeTitles from 'remark-code-titles';
import mdxPrism from 'mdx-prism';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { Code } from '../mdx/code/Code';
import { Snippet } from './snippet/Snippet';

type SnippetsProps = {
  readonly snippets: SnippetType[];
};

export const Snippets = memo<SnippetsProps>(({ snippets }) => (
  <main className={styles.wrapper} id="main">
    <Heading tag="h1" variant="primary">
      Snippety
    </Heading>

    <div className={styles.snippets}>
      {snippets.map((snippet) => {
        return <Snippet {...snippet} />;
      })}
    </div>

    {/* <section className={styles.wrapper}>
      <div className={cn(styles.postsWrapper, styles.postsWrapperPrimary)}>
        <PostsListing posts={posts} isPrimary={true} />
      </div>
    </section>  */}
  </main>
));

Snippets.displayName = 'Snippets';
