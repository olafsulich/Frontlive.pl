import { Articles } from './articles/articles';
import { About } from './about/about';
import styles from './hero.module.scss';

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <Articles />
      <About />
    </div>
  );
};
