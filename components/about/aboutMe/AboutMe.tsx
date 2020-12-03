import Image from 'next/image';
import { Heading } from '../../shared/components/heading/Heading';
import { Contact } from './contact/Contact';
import styles from './aboutMe.module.scss';
import { Sparkles } from '../../shared/components/sparkles/Sparkles';

export const AboutMe = () => (
  <div className={styles.wrapper}>
    <div className={styles.text}>
      <Heading className={styles.heading} variant="primary" tag="h1">
        O mnie
      </Heading>
      <p className={styles.text}>
        Nazywam się Olaf Sulich. Jestem <strong>frontend developerem</strong>, miłośnikiem Reakta i
        TypeScripta. Poza prowadzeniem tego bloga, intensywnie udzielam się w frontendowym
        community. Jestem również członkiem grupy
        <a
          href="https://przeprogramowani.pl/"
          target="_blank"
          rel="noopener noreferer"
          className={styles.link}
        >
          Przeprogramowani.
        </a>
      </p>
      <p className={styles.text}>
        W przerwach od pisania kodu trenuje amatorsko kick-boxing. Lubię też słuchać oldschoolowego,
        amerykańskiego hip-hopu.
      </p>
      <p className={styles.text}>
        Zainteresowana/y współpracą? Lubię rozmawiać z biznesem i osobami z branży, nie krępuj się i
        napisz do mnie. <Sparkles>Let's make something great together!</Sparkles>
      </p>
      <Contact />
    </div>
    <div className={styles.image}>
      <Image src="/images/me.png" alt="" width={530} height={929} quality={100} priority={true} />
    </div>
  </div>
);
