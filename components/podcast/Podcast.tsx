import { Heading } from '../shared/components/heading/Heading';
import { Records } from './records/Records';
import styles from './podcast.module.scss';

type PodcastProps = {
  readonly records: Array<{ name: string; participants: Array<string>; href: string }>;
};

export const Podcast = ({ records }: PodcastProps) => {
  return (
    <main className={styles.container}>
      <Heading className={styles.heading} tag="h1" variant="primary">
        Rozmówki
      </Heading>
      <div className={styles.wrapper}>
        <Records records={records} />
      </div>
    </main>
  );
};
