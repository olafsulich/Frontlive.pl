import { memo } from 'react';
import Link, { LinkProps } from 'next/link';
import cn from 'classnames';
import styles from './coursesCard.module.scss';
import GraphqlIcon from '../../../../public/icons/graphql.svg';

type CardVariant = 'blue' | 'green' | 'orange' | 'yellow' | 'purple';

type CoursesCardProps = {
  title: string;
  path: LinkProps['href'];
  variant: CardVariant;
};

const CoursesCard = memo<CoursesCardProps>(({ title, path, variant }) => {
  return (
    <article className={cn(styles.wrapper, styles[variant])}>
      <Link href={path}>
        <a className={styles.link}>
          <h2 className={styles.heading}>{title}</h2>
          <GraphqlIcon />
        </a>
      </Link>
    </article>
  );
});

export default CoursesCard;
