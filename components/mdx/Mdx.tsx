import { memo } from 'react';
import Heading from 'components/shared/components/heading/Heading';
import styles from './mdx.module.scss';
import Link from 'next/link';

type MdxProps = {
  frontmatter: {
    title: string;
    category: string;
  };
  content: string;
};

const Mdx = memo<MdxProps>(({ frontmatter, content }) => {
  const { title, category } = frontmatter;
  return (
    <article className={styles.wrapper}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Link href={`/kursy/${category}`}>
            <a className={styles.category}>
              <span className="visually-hidden">Kategoria:</span>
              <span>{category}</span>
            </a>
          </Link>
          <Heading tag="h1" variant="primary" className={styles.heading}>
            {title}
          </Heading>
        </header>
        {content}
      </div>
    </article>
  );
});

export default Mdx;
