import styles from './navigation.module.scss';
import Logo from './logo/Logo';
import LinksList from './linksList/LinksList';

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <Logo />
      <LinksList />
    </nav>
  );
};

export default Navigation;
