import { memo } from 'react';
import { useRouter } from 'next/router';
import Heading from 'components/shared/components/heading/Heading';
import styles from './mdx.module.scss';
import Link from 'next/link';
import slugify from 'slugify';
import Footer from './footer/Footer';

type PostFrontmatter = {
  title: string;
  category: string;
  publishedAt: string;
};

type ProjectFrontmatter = {
  title: string;
};

type MdxProps = {
  frontmatter: PostFrontmatter | ProjectFrontmatter;
  content: string;
};

const Mdx = memo<MdxProps>(({ frontmatter, content }) => {
  const { title } = frontmatter;
  const router = useRouter();
  return (
    <article className={styles.wrapper}>
      <div className={styles.content}>
        <header className={styles.header}>
          {'category' in frontmatter ? (
            <Link href={`/kategorie/${slugify(frontmatter.category, { lower: true })}`}>
              <a className={styles.category}>
                <span className="visually-hidden">Kategoria:</span>
                <span>{frontmatter.category}</span>
              </a>
            </Link>
          ) : null}
          <Heading tag="h1" variant="primary" className={styles.heading}>
            {title}
          </Heading>
        </header>
        {content}
        {'publishedAt' in frontmatter ? (
          <Footer
            publishedAt={frontmatter.publishedAt}
            title={title}
            url={router.query.slug as string}
          />
        ) : null}
      </div>
    </article>
  );
});

export default Mdx;
