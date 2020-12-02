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
        I recently got the following message in a DM: I’ve been building with HTML and CSS for
        years, and I still don’t know how to implement pixel-perfect designs If you're not familiar
        with the term, "pixel-perfection" is the idea that your HTML/CSS implementation should be as
        close to the original mockup…
      </p>
      <p className={styles.text}>
        I recently got the following message in a DM: I’ve been building with HTML and CSS for
        years, and I still don’t know how to implement pixel-perfect designs If you're not familiar
        with the term, "pixel-perfection" is the idea that your HTML/CSS implementation should be as
        close to the original mockup…
      </p>
      <Contact />
    </div>
    <div className={styles.image}>
      <Image src="/images/me.png" alt="" width={530} height={929} quality={100} priority={true} />
    </div>
  </div>
);
