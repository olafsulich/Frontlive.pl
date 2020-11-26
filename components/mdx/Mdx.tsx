import { memo } from 'react';
import Heading from 'components/shared/components/heading/Heading';
import styles from './mdx.module.scss';

type MdxProps = {
  title: string;
  content: string;
};

const Mdx = memo<MdxProps>(({ title, content }) => {
  return (
    <article className={styles.wrapper}>
      <Heading tag="h1" variant="primary" className={styles.heading}>
        {title}
      </Heading>
      <div className={styles.content}>{content}</div>
    </article>
  );
});

export default Mdx;
