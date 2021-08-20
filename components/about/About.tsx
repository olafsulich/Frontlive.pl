import { Heading } from '../shared/components/heading/Heading';
import styles from './about.module.scss';
import Image from 'next/image';
import { SocialLinks } from '../autor/socialLinks/SocialLinks';
import { Recommendations } from './recommendations/Recommendations';

export const About = () => {
  return (
    <main className={styles.container}>
      <Heading className={styles.heading} tag="h1" variant="primary">
        O&nbsp;mnie
      </Heading>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.text}>
            Siema, tu Olaf! Jak się możesz domyślić jestem Frontend Developerem. Obecnie pracuję i
            godnie reprezentuje firmę 
            <a
              className={styles.link}
              target="_blank"
              href="https://appunite.com/"
              rel="noopener noreferrer"
            >
              AppUnite
            </a>
            . Należę do tej najlepszej (żart) drużyny - drużyny Reakta, ale nie zamykam się na inne
            rozwiązania (patrzę na Ciebie Vue 👀). Poza frontendem straszne nie są mi designy i
            backend (chociaż to nadal <span className={styles.lineThrough}>JavaScript</span>{' '}
            TypeScript).
          </p>
          <p className={styles.text}>
            W przerwach od pisania kodu trenuje amatorsko kick-boxing. Lubię też słuchać
            oldschoolowego, amerykańskiego hip-hopu. Zapomniałbym o najważniejszym, ten kapelusz to
            nie PR! 🎩
          </p>
          <p className={styles.text}>
            Zainteresowana/y współpracą? Lubię rozmawiać z biznesem i osobami z branży, nie krępuj
            się i{' '}
            <a className={styles.link} href="mailto:olafsulich@gmail.com">
              napisz do mnie
            </a>
            . Let's make something great together!
          </p>
          <p className={styles.text}>Psst, nie zapomnij wpaść na moje sociale 👇</p>
          <SocialLinks />
        </div>
        <div className={styles.image}>
          <Image
            src="/images/olaf-about.png"
            width={517}
            height={718}
            alt="Olaf na family day'u w siedzibie AppUnite w Poznaniu."
          />
        </div>
      </div>
      <div className={styles.faces}>
        <Image src="/images/olaf-faces.png" alt="" width={870} height={133} />
      </div>
      <Recommendations />
    </main>
  );
};
