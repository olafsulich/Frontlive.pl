import { memo } from 'react';
import CheckMarkIcon from '../../../../public/icons/check-mark.svg';
import styles from './checkMark.module.scss';
import cn from 'classnames';

type Variant = 'blue' | 'green' | 'orange' | 'yellow' | 'purple' | 'black';

type CheckMarkProps = {
  variant: Variant;
};

const CheckMark = memo<CheckMarkProps>(({ variant }) => (
  <span aria-hidden="true" className={cn(styles.wrapper, styles[variant])}>
    <CheckMarkIcon />
  </span>
));

export default CheckMark;
