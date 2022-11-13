import Wave from '../../public/icons/wave-2.svg';
import styles from './footer.module.scss';
import { Logo } from '../navigation/logo/Logo';

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Wave className={styles.wave} />
      <div className={styles.content}>
        <p className={styles.copyrights}>
          © {new Date().getFullYear()} Olaf Sulich. All rights reserved
        </p>
      </div>
    </footer>
  );
};
