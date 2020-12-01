import { memo, ReactNode } from 'react';
import styles from './heading.module.scss';
import cn from 'classnames';

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Variant = 'primary' | 'secondary' | 'tertiary';

type HeadingProps = {
  children: ReactNode;
  tag: Tag;
  variant: Variant;
  className?: string;
};

export const Heading = memo(({ children, tag: Tag = 'h1', variant, className }: HeadingProps) => {
  return <Tag className={cn(className, styles[variant])}>{children}</Tag>;
});
