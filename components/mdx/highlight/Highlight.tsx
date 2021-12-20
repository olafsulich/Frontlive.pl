import { memo, ReactNode } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import styles from './highlight.module.scss';

type HighlightProps = {
  readonly variant: 'success' | 'error' | 'info' | 'warning';
  readonly title: string;
  readonly children: ReactNode;
};

export const Highlight = memo(({ variant, title, children }: HighlightProps) => {
  return (
    <aside className={cn(styles.wrapper, styles[variant])}>
      <div className={styles.icon}>
        <Image src={`/icons/${variant}.svg`} width="30" height="30" alt="" />
      </div>
      <strong className={styles.title}>{title}</strong>
      {children}
    </aside>
  );
});

Highlight.displayName = 'Highlight';
