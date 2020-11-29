import { memo } from 'react';
import Heading from 'components/shared/components/heading/Heading';
import styles from './mdx.module.scss';
import Link from 'next/link';
import slugify from 'slugify';
import Footer from './footer/Footer';

type MdxProps = {
  frontmatter: {
    title: string;
    category: string;
    publishedAt: string;
  };
  content: string;
};

const Mdx = memo<MdxProps>(({ frontmatter, content }) => {
  const { title, category, publishedAt } = frontmatter;
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
        <Footer publishedAt={publishedAt} />
      </div>
    </article>
  );
});

export default Mdx;
