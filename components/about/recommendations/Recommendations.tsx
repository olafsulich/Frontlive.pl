import styles from './recommendations.module.scss';
import { Heading } from '../../shared/components/heading/Heading';
import { recommendations } from '../../../data/recommendations';
import { RecommendationCard } from './recommendationsCard/recommendationsCard';

export const Recommendations = () => (
  <section className={styles.wrapper}>
    <div className={styles.recommendations}>
      {recommendations.map(({ content, author }) => (
        <RecommendationCard key={author.name} content={content} author={author} />
      ))}
    </div>
  </section>
);
