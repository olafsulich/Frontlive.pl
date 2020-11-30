import { memo } from 'react';
import styles from './recommendationCard.module.scss';

type RecommendationCardProps = {
  content: string;
  author: {
    image: string;
    name: string;
    company: string;
  };
};

const RecommendationCard = memo<RecommendationCardProps>(({ content, author }) => {
  const { image, name, company } = author;
  return (
    <blockquote className={styles.wrapper}>
      <p className={styles.text}>{content}</p>
      <div className={styles.author}>
        <img src={image} alt="" className={styles.authorImage} />
        <div className={styles.textWrapper}>
          <cite className={styles.authorName}>
            <span className="visually-hidden">Autor:</span>
            <span>{name}</span>
          </cite>
          <p className={styles.authorCompany}>
            <span className="visually-hidden">Firma, w której pracuję autor:</span>
            {company}
          </p>
        </div>
      </div>
    </blockquote>
  );
});

export default RecommendationCard;
