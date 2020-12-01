import { memo, ReactNode } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Share } from './share/Share';
import styles from './footer.module.scss';

dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);

type FooterProps = {
  publishedAt: string;
  url: string;
  title: string;
};

export const Footer = memo(({ publishedAt, url, title }: FooterProps) => {
  const formattedDate = dayjs(publishedAt, 'DD-MM-YYYY').locale('pl').format('LL');
  return (
    <footer className={styles.container}>
      <section className={styles.wrapper}>
        <h2 className={styles.heading}>Data dodania</h2>
        <p className={styles.text}>{formattedDate}</p>
      </section>
      <section className={styles.wrapper}>
        <h2 className={styles.heading}>Udostępnij</h2>
        <Share title={title} url={url} />
      </section>
    </footer>
  );
});
