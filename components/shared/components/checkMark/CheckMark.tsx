import { memo } from 'react';
import cn from 'classnames';
import CheckMarkIcon from '../../../../public/icons/check-mark.svg';
import type { Variant } from '../../../../types/types';
import styles from './checkMark.module.scss';

type CheckMarkProps = {
  variant: Variant;
};

export const CheckMark = memo<CheckMarkProps>(({ variant }) => (
  <span aria-hidden="true" className={cn(styles.wrapper, styles[variant])}>
    <CheckMarkIcon />
  </span>
));

CheckMark.displayName = 'CheckMark';
