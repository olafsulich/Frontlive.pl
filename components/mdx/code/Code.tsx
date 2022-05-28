import { DetailedHTMLProps, HTMLAttributes, isValidElement, useRef } from 'react';
import styles from './code.module.scss';
import ClipboardIcon from '../../../public/icons/clipboard.svg';
import CheckIcon from '../../../public/icons/check-mark.svg';
import ExternalLinkIcon from '../../../public/icons/external-link.svg';
import { getParameters } from 'codesandbox/lib/api/define';

import useCopyableRef from '../../../hooks/useCopyableRef';
import { useRouter } from 'next/router';

export const Code = (props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => {
  const router = useRouter();
  const preRef = useRef<HTMLPreElement | null>(null);
  const { isCopied, copy } = useCopyableRef<HTMLPreElement>(preRef);

  const onOpenInCodeSandbox = () => {
    if (!preRef.current) return;

    const fileName = props.className ? `index.${props.className.split('-')[1]}` : '';

    const parameters = getParameters({
      files: {
        [fileName]: {
          isBinary: false,
          content: preRef.current.textContent || '',
        },
      },
    });

    if (typeof window !== 'undefined') {
      window.open(
        `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`,
        '_blank',
      );
    }
  };

  return (
    <article className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.dots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
        <div className={styles.actions}>
          <button onClick={copy} className={styles.clipboard}>
            <span className="visually-hidden">{isCopied ? 'Skopiowano' : 'Skopiuj'}</span>
            {isCopied ? <CheckIcon /> : <ClipboardIcon className={styles.clipboardIcon} />}
          </button>
          {props.className && (
            <button onClick={onOpenInCodeSandbox} className={styles.sandbox}>
              <span className="visually-hidden">Stwórz nowy codesanbox</span>
              <ExternalLinkIcon className={styles.sandboxIcon} />
            </button>
          )}
        </div>
      </header>
      <pre ref={preRef} {...props}>
        {isValidElement(props.children) && <code {...props.children.props} />}
      </pre>
    </article>
  );
};
