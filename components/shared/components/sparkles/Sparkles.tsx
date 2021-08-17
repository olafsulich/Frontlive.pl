import { useState, memo, ReactNode } from 'react';
import { generateSparkle } from './utils/generateSparkle';
import { Sparkle } from './sparkle/Sparkle';
import { range } from './utils/range';
import { usePrefersReducedMotion } from '../../utils/usePrefersReducedMotion';
import { useRandomInterval } from './utils/useRandomInterval';
import styles from './sparkles.module.scss';
import { randomNumber } from './utils/randomNumber';

type SparklesProps = {
  children: ReactNode;
};

const RANDOM_RANGE_START = 3;
const MAX_SPARKLE_DELTA = 750;
const MIN_RANDOM_INTERVAL_DELAY = 50;
const MAX_RANDOM_INTERVAL_DELAY = 450;

const Sparkles = memo<SparklesProps>(({ children }) => {
  const [sparkles, setSparkles] = useState(() => {
    return range(RANDOM_RANGE_START).map(() => generateSparkle());
  });
  console.log(sparkles);
  const prefersReducedMotion = usePrefersReducedMotion();
  useRandomInterval(
    () => {
      const number = randomNumber(5, 10);
      const sparkles = Array(number).map(() => {
        const sparkle = generateSparkle();
        return sparkle;
      });
      //   const now = Date.now();
      //   const nextSparkles = sparkles.filter((sp) => {
      //     const delta = now - 1231234123123;
      //     return delta < MAX_SPARKLE_DELTA;
      //   });
      //   nextSparkles.push(sparkle);
      setSparkles(sparkles);
    },
    null, null
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

export default Sparkles;

Sparkles.displayName = 'Sparkles';
