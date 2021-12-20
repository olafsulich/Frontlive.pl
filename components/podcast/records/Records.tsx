import { memo } from 'react';
import { RecordCard } from '../recordCard/RecordCard';
import styles from './records.module.scss';

type RecordsProps = {
  readonly records: Array<{ name: string; participants: Array<string>; href: string }>;
};

export const Records = memo(({ records }: RecordsProps) => (
  <div className={styles.wrapper}>
    {records.map(({ name, participants, href }) => (
      <RecordCard name={name} participants={participants} href={href} />
    ))}
  </div>
));
