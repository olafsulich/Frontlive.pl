import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
// import {Image} from './image/image';
import styles from './mdx.module.scss';

type MDXProps = {
  code: string;
  frontmatter: any;
};

export const MDX = ({ code, frontmatter }: MDXProps) => {
  //   const Component = useMemo(() => getMDXComponent(code, { image: Image }), [code]);

  return (
    <article className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>{frontmatter.title}</h1>
        <p className={styles.author}>by Olaf Sulich</p>
      </header>
      {/* <Component /> */}
    </article>
  );
};
