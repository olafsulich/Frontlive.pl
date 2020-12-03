import { useState, memo, ReactNode } from 'react';
import { generateSparkle } from './utils/generateSparkle';
import { Sparkle } from './sparkle/Sparkle';
import { range } from './utils/range';
import { usePrefersReducedMotion } from '../../utils/usePrefersReducedMotion';
import { useRandomInterval } from './utils/useRandomInterval';
import styles from './sparkles.module.scss';

type SparklesProps = {
  children: ReactNode;
};

export const Sparkles = memo<SparklesProps>(({ children }) => {
  const [sparkles, setSparkles] = useState(() => {
    return range(3).map(() => generateSparkle());
  });
  const prefersReducedMotion = usePrefersReducedMotion();
  useRandomInterval(
    () => {
      const sparkle = generateSparkle();
      const now = Date.now();
      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });
      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    prefersReducedMotion ? null : 50,
    prefersReducedMotion ? null : 450,
  );

  return (
    <span className={styles.wrapper}>
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} color={sparkle.color} size={sparkle.size} style={sparkle.style} />
      ))}
      <strong>{children}</strong>
    </span>
  );
});
