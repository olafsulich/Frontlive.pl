import { memo } from 'react';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import cn from 'classnames';
import styles from './categoryCard.module.scss';

type CardVariant = 'blue' | 'green' | 'orange' | 'yellow' | 'purple' | 'black';

type CategoryCardProps = {
  title: string;
  path: LinkProps['href'];
  variant: CardVariant;
  image: string;
};

export const CategoryCard = memo<CategoryCardProps>(({ title, path, variant, image }) => {
  return (
    <article className={cn(styles.wrapper, styles[variant])}>
      <Link href={path}>
        <a className={styles.link}>
          <h2 className={styles.heading}>{title}</h2>
          <div className={styles.icon}>
            <Image src={image} alt="" width={220} height={220} layout="fixed" quality={85} />
          </div>
        </a>
      </Link>
    </article>
  );
});
