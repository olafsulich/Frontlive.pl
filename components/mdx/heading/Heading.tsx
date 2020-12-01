import { memo, ReactNode } from 'react';
import cn from 'classnames';
import styles from './heading.module.scss';

type Tag = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
  children: ReactNode;
  tag: Tag;
  id: string;
};

export const Heading = memo(({ children, tag: Tag = 'h2', id }: HeadingProps) => (
  <Tag id={id} className={cn(styles.heading, styles[Tag])}>
    {children}
  </Tag>
));
