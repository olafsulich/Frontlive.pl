import styles from './recommendations.module.scss';
import { Heading } from '../../shared/components/heading/Heading';
import { recommendations } from '../../../data/recommendations';
import { RecommendationCard } from './recommendationCard/RecommendationCard';

export const Recommendations = () => (
  <section className={styles.wrapper}>
    <Heading variant="secondary" tag="h2" className={styles.heading}>
      Co mówią inni?
    </Heading>
    <div className={styles.recommendations}>
      {recommendations.map(({ content, author }) => (
        <RecommendationCard key={author.name} content={content} author={author} />
      ))}
    </div>
  </section>
);
