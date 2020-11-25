import styles from './header.module.scss';
import Navigation from './navigation/Navigation';
import Hero from './hero/Hero';

const Header = () => {
  return (
    <>
      <header className={styles.wrapper}>
        <Navigation />
        <Hero />
      </header>
    </>
  );
};

export default Header;
