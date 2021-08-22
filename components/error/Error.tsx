import Image from 'next/image';
import { Heading } from '../shared/components/heading/Heading';
import styles from './error.module.scss';

export const Error = ({ name,description }: { name: string; description: string }) => {
  return (
    <main className={styles.container}>
      <Heading className={styles.heading} tag="h1" variant="primary">
        {name}
      </Heading>
      <div className={styles.wrapper}>
        <p className={styles.text}>
        {description}
        </p>
        <Image src="/images/olaf-sad.png" alt="" width={299} height={296} quality={100} />
      </div>
    </main>
  );
};
