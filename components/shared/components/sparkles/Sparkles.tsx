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

const RANDOM_RANGE_START = 3;
const MAX_SPARKLE_DELTA = 750;
const MIN_RANDOM_INTERVAL_DELAY = 50;
const MAX_RANDOM_INTERVAL_DELAY = 450;

export const Sparkles = memo<SparklesProps>(({ children }) => {
  const [sparkles, setSparkles] = useState(() => {
    return range(RANDOM_RANGE_START).map(() => generateSparkle());
  });
  const prefersReducedMotion = usePrefersReducedMotion();
  useRandomInterval(
    () => {
      const sparkle = generateSparkle();
      const now = Date.now();
      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt;
        return delta < MAX_SPARKLE_DELTA;
      });
      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    prefersReducedMotion ? null : MIN_RANDOM_INTERVAL_DELAY,
    prefersReducedMotion ? null : MAX_RANDOM_INTERVAL_DELAY,
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

Sparkles.displayName = 'Sparkles';
