import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './recordCard.module.scss';

type RecordCardProps = {
  readonly name: string;
  readonly participants: Array<string>;
  readonly href: string;
};

export const RecordCard = memo(({ name, participants, href }: RecordCardProps) => (
  <Link href={href}>
    <a className={styles.link}>
      <div className={styles.participants}>
        {participants.map((source) => (
          <Image className={styles.image} src={source} alt="" width={100} height={100} />
        ))}
      </div>
      {name}
    </a>
  </Link>
));
