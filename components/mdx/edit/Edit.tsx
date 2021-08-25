import styles from './edit.module.scss';
import Image from 'next/image';
import cn from 'classnames';

export const Edit = () => {
  const pathname = window.location.pathname;
  return (
    <article className={styles.wrapper}>
      <h2 className="visually-hidden">Podziel się artykułem</h2>
      <div className={styles.image}>
        <Image src="/images/pencil.png" alt="" width={150} height={150} />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Zauważyłeś błąd? Edytuj ten post na{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/olafsulich/Frontlive.pl/tree/main/content/posts/${pathname.replace(
              '/blog',
              '',
            )}.mdx`}
            className={cn('githubEditLink', styles.link)}
          >
            GitHubie!
          </a>
        </p>
      </div>
    </article>
  );
};
