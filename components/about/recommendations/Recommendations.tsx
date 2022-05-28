import styles from './recommendations.module.scss';
import { Heading } from '../../shared/components/heading/Heading';
import { recommendations } from '../../../data/recommendations';
import { RecommendationCard } from './recommendationsCard/recommendationsCard';

export const Recommendations = () => (
  <section aria-labelledby="recommendations-heading" className={styles.wrapper}>
    <h2 id="recommendations-heading" className={styles.wrapperHeading}>
      Rekomendacje
    </h2>
    <div className={styles.recommendations}>
      {recommendations.map(({ content, author }) => (
        <RecommendationCard key={author.name} content={content} author={author} />
      ))}
    </div>
  </section>
);
