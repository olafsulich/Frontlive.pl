import { Heading } from '../shared/components/heading/Heading';
import styles from './newsletter.module.scss';
import Image from 'next/image';
import { NewsletterForm } from '../shared/components/newsletter/newsletterForm/NewsletterForm';

export const Newsletter = () => {
  return (
    <main className={styles.container}>
      <Heading className={styles.heading} tag="h1" variant="primary">
        Newsletter
      </Heading>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.text}>
            O nie, tylko nie kolejny branżowy newsletter, jestem już zapisany na 100 innych! Znam
            ten ból, sam jestem zapisany na X newsletterów i ja też nie lubię spamu. Dlatego w tym
            newsletterze nie uświadczysz żadnego bullshitu. Od czasu do czasu będę podsyłał Ci kilka
            przydatnych linków + aktualizację z tego bloga 📮
          </p>
        </div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.listItemText}>Konkursy z nagrodami</span>
            <div className={styles.icon}>
              <Image
                className={styles.icon}
                src="/images/icon-present.png"
                width={50}
                height={50}
                alt=""
                priority
              />
            </div>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listItemText}>Nowości ze świata Frontendu</span>
            <div className={styles.icon}>
              <Image src="/images/icon-sparkle.png" width={50} height={50} alt="" priority />
            </div>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listItemText}>Dodatkowe materiały</span>
            <div className={styles.icon}>
              <Image src="/images/icon-fire.png" width={50} height={50} alt="" priority />
            </div>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listItemText}>Zero spamu</span>
            <div className={styles.icon}>
              <Image src="/images/icon-stop.png" width={50} height={50} alt="" priority />
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.newsletter}>
        <NewsletterForm />
        <p className={styles.regulations}>Zapisując się do newslettera akceptujesz regulamin.</p>
      </div>
    </main>
  );
};
