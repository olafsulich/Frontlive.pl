import { memo } from 'react';
import styles from './recommendations.module.scss';
import Heading from '../shared/components/heading/Heading';
import { recommendations } from '../../data/recommendations';
import RecommendationCard from './recommendationCard/RecommendationCard';

const Recommendations = memo(() => (
  <section className={styles.wrapper}>
    <Heading variant="secondary" tag="h2" className={styles.heading}>
      Co mówią inni?
    </Heading>
    <div className={styles.recommendations}>
      {recommendations.map(({ content, author }) => (
        <RecommendationCard content={content} author={author} />
      ))}
    </div>
  </section>
));

export default Recommendations;
