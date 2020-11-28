import { memo } from 'react';
import Heading from 'components/shared/components/heading/Heading';
import styles from './mdx.module.scss';
import Link from 'next/link';
import slugify from 'slugify';

type MdxProps = {
  frontmatter: {
    title: string;
    category: string;
  };
  content: string;
};

const Mdx = memo<MdxProps>(({ frontmatter, content }) => {
  const { title, category } = frontmatter;
  const pathToCategory = slugify(category, { lower: true });

  return (
    <article className={styles.wrapper}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Link href={`/kategorie/${pathToCategory}`}>
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
        <Heading tag="h2" variant="secondary">
          Opublikowane
        </Heading>
      </div>
    </article>
  );
});

export default Mdx;
