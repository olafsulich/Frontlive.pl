import { useState } from 'react';
import Link from 'next/link';
import * as Portal from '@radix-ui/react-portal';
import { ArrowRightIcon, Cross2Icon } from '@radix-ui/react-icons';
import styles from './top-banner.module.scss';

export const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && (
        <Portal.Root>
          <aside className={styles.container}>
            <div className={styles.wrapper}>
              <Link href="/newsletter">
                <a className={styles.link}>Newsletter dla Frontend Developerów</a>
              </Link>
              <ArrowRightIcon className={styles.arrow} />
            </div>
          </aside>
        </Portal.Root>
      )}
    </>
  );
};
