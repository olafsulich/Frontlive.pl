import { memo, ReactNode } from 'react';
import cn from 'classnames';
import type { Heading as HeadingVariant } from '../../../types/types';
import styles from './heading.module.scss';
import slugify from 'slugify';

type HeadingProps = {
  readonly slug: string;
  readonly headingTag: HeadingVariant;
  readonly url: string;
};

export const Heading = memo(({ headingTag: Tag, slug, url }: HeadingProps) => {
  const id = slugify(slug, { lower: true });

  return (
    <Tag id={id} className={cn(styles.heading, styles[Tag])}>
      <a href={`${url}/#${id}`} aria-hidden="true" tabIndex={-1}>
        {/* {slug} */}
        <span></span>
      </a>
      {slug}
    </Tag>
  );
});

Heading.displayName = 'Heading';
