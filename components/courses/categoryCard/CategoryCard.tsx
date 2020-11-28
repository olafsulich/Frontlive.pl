import { memo, ReactElement } from 'react';
import Link, { LinkProps } from 'next/link';
import cn from 'classnames';
import styles from './categoryCard.module.scss';

type CardVariant = 'blue' | 'green' | 'orange' | 'yellow' | 'purple' | 'black';

type CoursesCardProps = {
  title: string;
  path: LinkProps['href'];
  variant: CardVariant;
  image: string;
};

const CoursesCard = memo<CoursesCardProps>(({ title, path, variant, image }) => {
  return (
    <article className={cn(styles.wrapper, styles[variant])}>
      <Link href={path}>
        <a className={styles.link}>
          <h2 className={styles.heading}>{title}</h2>
          <img src={image} className={styles.icon} alt="" />
        </a>
      </Link>
    </article>
  );
});

export default CoursesCard;
