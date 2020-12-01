import { memo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import slugify from 'slugify';
import cn from 'classnames';
import { Heading } from 'components/shared/components/heading/Heading';
import { Footer } from './footer/Footer';
import styles from './mdx.module.scss';

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

export const Mdx = memo<MdxProps>(({ frontmatter, content }) => {
  const { title } = frontmatter;
  const isPost = 'category' in frontmatter;
  const router = useRouter();
  return (
    <article
      className={cn(styles.wrapper, {
        [styles.projectWrapper]: !isPost,
      })}
    >
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
