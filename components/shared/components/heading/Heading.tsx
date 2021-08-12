import { memo, ReactNode } from 'react';
import cn from 'classnames';
import type { Heading as HeadingTag } from '../../../../types/types';
import styles from './heading.module.scss';

type Variant = 'primary' | 'secondary' | 'tertiary';

type HeadingProps = {
  children: ReactNode;
  tag: HeadingTag;
  variant: Variant;
  className?: string;
};

export const Heading = memo(({ children, tag: Tag = 'h1', variant, className }: HeadingProps) => {
  return (
    <Tag data-before-content={children} className={cn(className, styles[variant])}>
      {children}
      {/* {variant === 'primary' && <span className={styles.primaryBigHeading}>{children}</span>} */}
    </Tag>
  );
});

Heading.displayName = 'Heading';
