import Image from 'next/image';
import { Heading } from '../../shared/components/heading/Heading';
import { Contact } from './contact/Contact';
import styles from './aboutMe.module.scss';

export const AboutMe = () => (
  <div className={styles.wrapper}>
    <div className={styles.text}>
      <Heading className={styles.heading} variant="primary" tag="h1">
        O mnie
      </Heading>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      </p>
      <Contact />
    </div>
    <div className={styles.image}>
      <Image src="/images/me.png" alt="" width={530} height={929} quality={100} priority={true} />
    </div>
  </div>
);
