import React from 'react';
import { timeline } from '../../../data/timeline';
import styles from './timeline.module.scss';
import Link from 'next/link';
import LinkIcon from '../../../public/icons/link.svg';

export const TimeLine = () => {
  return (
    <section className={styles.wrapper} aria-labelledby="timeline-heading">
      <h2 id="timeline-heading" className={styles.wrapperHeading}>
        Wydarzenia
      </h2>
      {timeline.map(({ date, name, description, href }) => (
        <article key={name} className={styles.item}>
          <div className={styles.indicator}>
            <div className={styles.dot}></div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.dateContentWrapper}>
            <time className={styles.date}>{date}</time>
            <div className={styles.content}>
              {href ? (
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  <a className={styles.link}>
                    <h3 className={styles.heading}>
                      {name} <LinkIcon className={styles.icon} />
                    </h3>
                  </a>
                </Link>
              ) : (
                <div className={styles.headingWrapper}>
                  <h3 className={styles.heading}>{name}</h3>
                </div>
              )}
              <p className={styles.description}>{description}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};
