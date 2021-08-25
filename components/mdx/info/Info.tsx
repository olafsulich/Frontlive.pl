import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import styles from './info.module.scss';
import { polishPlurals } from 'polish-plurals';
import Image from 'next/image';
import { PostFrontmatter } from '../../../types/types';

dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);

type InfoProps = {
  readonly frontmatter: PostFrontmatter;
};

export const Info = ({ frontmatter }: InfoProps) => {
  const formattedDate = dayjs(frontmatter.publishedAt, 'DD-MM-YYYY').locale('pl').format('LL');
  const formattedReadingTime = polishPlurals(
    'minuta',
    'minuty',
    'minut',
    Math.round(frontmatter.readingTime),
  );
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <span className={styles.text}>
          {Math.round(frontmatter.readingTime)} {formattedReadingTime}
        </span>{' '}
        <div className={styles.icon}>
          <Image src="/images/hourglass.png" width={35} height={35} alt="" priority />
        </div>
      </li>
      <li className={styles.listItem}>
        <span className={styles.text}>{formattedDate}</span>{' '}
        <div className={styles.icon}>
          <Image src="/images/calendar.png" width={35} height={35} alt="" priority />
        </div>
      </li>
    </ul>
  );
};
