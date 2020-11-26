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
      <header>
        <Heading tag="h1" variant="primary" className={styles.heading}>
          {title}
        </Heading>
      </header>

      <div className="content">{content}</div>
    </article>
  );
});

export default Mdx;
