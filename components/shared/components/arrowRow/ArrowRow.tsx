import { memo } from 'react';
import cn from 'classnames';
import styles from './arrowRow.module.scss';
import ArrowRightIcon from '../../../../public/icons/arrow-right-line.svg';
import ArrowLeftIcon from '../../../../public/icons/arrow-left-line.svg';

type ArrowRowProps = {
  position: 'right' | 'left';
};

export const ArrowRow = memo<ArrowRowProps>(({ position }) => (
  <div
    className={cn(styles.wrapper, {
      [styles.wrapperRight]: position === 'right',
      [styles.wrapperLeft]: position === 'left',
    })}
  >
    {position === 'right' ? (
      <ArrowRightIcon className={cn(styles.arrow, styles.arrowRight)} />
    ) : (
      <ArrowLeftIcon className={cn(styles.arrow, styles.arrowLeft)} />
    )}
  </div>
));
