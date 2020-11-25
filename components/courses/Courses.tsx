import { memo } from 'react';
import styles from './courses.module.scss';
import CourseCard from './courseCard/CourseCard';
import GraphQLIcon from '../../public/icons/graphql.svg';
import TypeScriptIcon from '../../public/icons/typescript.svg';

const Courses = () => {
  return (
    <div className={styles.wrapper}>
      <CourseCard path="/" title="GraphQL" variant="purple" image="/images/graphql.png" />
      <CourseCard path="/" title="Firebase" variant="orange" image="/images/firebase.png" />
      <CourseCard path="/" title="TypeScript" variant="blue" image="/images/typescript.png" />
    </div>
  );
};

export default Courses;
