import React, { memo, useCallback } from 'react';
import cn from 'classnames';
import styles from './codeHeader.module.scss';
import ClipboardIcon from '../../../public/icons/clipboard.svg';
import CheckIcon from '../../../public/icons/check-mark.svg';
import ExternalLinkIcon from '../../../public/icons/external-link.svg';
import { getParameters } from 'codesandbox/lib/api/define';

type CodeHeaderProps = {
  isCopied: boolean;
  className: string | undefined;
  onCopy: () => void;
  code: string | null | undefined;
  title: string | undefined;
};

export const CodeHeader = memo<CodeHeaderProps>(({ onCopy, className, isCopied, code, title }) => {
  const getCodeSandboxLink = useCallback(() => {
    const fileName = className ? `index.${className.split('-')[1]}` : '';

    const parameters = getParameters({
      files: {
        [fileName]: {
          isBinary: false,
          content: code || '',
        },
      },
    });

    return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;
  }, [code, className]);

  return (
    <header className={styles.header}>
      <div className={styles.titleAndDots}>
        <div
          className={cn(styles.dots, {
            [styles.hiddenOnMobile]: title,
          })}
        >
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
        <p data-codeTitle className={styles.title}>
          {title}
        </p>
      </div>

      <div className={styles.actions}>
        <button onClick={onCopy} className={styles.clipboard}>
          <span className="visually-hidden">{isCopied ? 'Skopiowano' : 'Skopiuj'}</span>
          {isCopied ? <CheckIcon /> : <ClipboardIcon className={styles.clipboardIcon} />}
        </button>
        {className && (
          <a href={getCodeSandboxLink()} target="_blank" className={styles.sandbox}>
            <span className="visually-hidden">Stwórz nowy codesandbox</span>
            <ExternalLinkIcon className={styles.sandboxIcon} />
          </a>
        )}
      </div>
    </header>
  );
});

CodeHeader.displayName = 'CodeHeader';
