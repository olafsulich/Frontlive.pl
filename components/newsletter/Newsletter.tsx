import { Heading } from '../shared/components/heading/Heading';
import styles from './newsletter.module.scss';
import Image from 'next/image';
import { NewsletterForm } from '../shared/components/newsletter/newsletterForm/NewsletterForm';
import LinkIcon from '../../public/icons/link.svg';

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
            ten ból, sam jestem zapisany na X newsletterów i ja też nie lubię spamu...
          </p>
          <p className={styles.text}>
            Dlatego w tym newsletterze nie uświadczysz żadnego bullshitu. Od czasu do czasu będę
            podsyłał Ci kilka przydatnych linków + aktualizację z tego bloga 📮
          </p>
          <p className={styles.text}>
            Przykładowe maile:
            <ul className={styles.newslettersLists}>
              <li className={styles.newsletterExample}>
                <a
                  href="https://mailchi.mp/e9b8a4ffcdce/zaawansowane-patterny-renderowania-w-react-ts-enum-i-css-subgrid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zaawansowane Patterny Renderowania W React, TS Enum
                  <LinkIcon className={styles.linkIcon} />
                </a>
              </li>
              <li className={styles.newsletterExample}>
                <a
                  href="https://mailchi.mp/4cfd8fcad681/mikrofrontendy-na-produkcji-czytelny-ts-i-useevent-w-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mikrofrontendy na produkcji, czytelny TS i useEvent w React
                  <LinkIcon className={styles.linkIcon} />
                </a>
              </li>
              <li className={styles.newsletterExample}>
                <a
                  href="https://mailchi.mp/7a142632963d/ekosystem-react-2022-kompendium-wiedzy-o-a11y-i-selektor-rodzica-w-css"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ekosystem React 2022, kompendium wiedzy o a11y
                  <LinkIcon className={styles.linkIcon} />
                </a>
              </li>
            </ul>
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
        {/* <p className={styles.regulations}>Zapisując się do newslettera akceptujesz regulamin.</p> */}
      </div>
    </main>
  );
};
