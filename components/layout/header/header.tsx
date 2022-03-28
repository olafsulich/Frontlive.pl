import { Navigation } from './navigation';
import { TopBanner } from './top-banner';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <TopBanner />
      <Navigation />
      <h1 className="visually-hidden">frontlive</h1>
    </header>
  );
};
