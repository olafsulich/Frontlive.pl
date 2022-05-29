import { Heading } from '../shared/components/heading/Heading';
import styles from './newsletter.module.scss';
import Image from 'next/image';
import { NewsletterForm } from '../shared/components/newsletter/newsletterForm/NewsletterForm';
import LinkIcon from '../../public/icons/link.svg';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { REMOVE_EMOJI_REGEXP } from '../../utils/regexp';

dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);

type NewsletterProps = {
  readonly subscribersCount: number;
  readonly campaigns: {
    id: string;
    link: string;
    name: string;
    sendTime: string;
  }[];
};

export const Newsletter = ({ subscribersCount, campaigns }: NewsletterProps) => {
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
          <div className={styles.newsletter}>
            <NewsletterForm />
          </div>
        </div>
        <ul aria-label="Czym się wyróżnia?" className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.listItemText}>{subscribersCount} zapisanych osób</span>
            <div className={styles.icon}>
              <Image
                className={styles.icon}
                src="/images/icon-dev.png"
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
      <h2 id="newsletter-archive" className={styles.archive}>
        Archiwum
      </h2>
      <ul aria-labelledby="newsletter-archive" className={styles.newslettersLists}>
        {campaigns.map((campaign) => (
          <li key={campaign.id} className={styles.newsletterExample}>
            <a href={campaign.link} target="_blank" rel="noopener noreferrer">
              <div className={styles.newsletterExampleContent}>
                {campaign.name.replace(REMOVE_EMOJI_REGEXP, '')}
                <span className={styles.sendTime}>
                  {dayjs(campaign.sendTime, 'YYYY-MM-DD').locale('pl').format('LL')}
                </span>
              </div>
              <LinkIcon className={styles.linkIcon} />
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};
