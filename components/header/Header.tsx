import styles from './header.module.scss';
import Navigation from './navigation/Navigation';
import Hero from './hero/Hero';
import { HeaderProvider } from '../shared/context/HeaderContext';

const Header = () => {
  return (
    <HeaderProvider>
      <header className={styles.wrapper}>
        <Navigation />
        <Hero />
      </header>
    </HeaderProvider>
  );
};

export default Header;
