import useClipboard from 'react-use-clipboard';
import { Snippet as SnippetType } from '../../../types/types';
import { Code } from '../../mdx/code/Code';
import ClipboardIcon from '../../../public/icons/clipboard.svg';
import StartIcon from '../../../public/icons/star.svg';
import styles from './snippet.module.scss';

export const Snippet = ({ url, filename, content, description }: SnippetType) => {
  const [isCopied, setCopied] = useClipboard(content);
  return (
    <section className={styles.wrapper}>
      <div className={styles.actions}>
        <h2 className={styles.heading}>{filename}</h2>
        <div className={styles.actionsWrapper}>
          <button onClick={setCopied} className={styles.action}>
            {isCopied ? 'Skopiowano!' : 'Skopiuj'}
            <ClipboardIcon />
          </button>
          <a target="_blank" rel="noopener noreferrer" href={url} className={styles.action}>
            Daj gwiazdkę
            <StartIcon />
          </a>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <Code code={content} />
    </section>
  );
};
