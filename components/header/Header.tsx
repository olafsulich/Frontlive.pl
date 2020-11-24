import styles from './header.module.scss';
import GitHubIcon from '../../public/icons/github.svg';
import LinkedInIcon from '../../public/icons/linkedin.svg';
import TwitterIcon from '../../public/icons/twitter.svg';
import Navigation from './navigation/Navigation';
import Hero from './hero/Hero';

const Header = () => {
  return (
    <>
      {/* <div className={styles.backgroundGradient}></div> */}
      <header className={styles.wrapper}>
        <Navigation />
        <Hero />
      </header>
    </>
  );
};

export default Header;
