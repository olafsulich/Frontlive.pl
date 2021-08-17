import { memo, ReactNode } from 'react';

import styles from './sparkles.module.scss';

type SparklesProps = {
  children: ReactNode;
};

const Sparkles = memo<SparklesProps>(({ children }) => {
  return (
    <span className={styles.wrapper}>
      <strong>{children}</strong>
    </span>
  );
});

export default Sparkles;

Sparkles.displayName = 'Sparkles';
