import { DetailedHTMLProps, HTMLAttributes, isValidElement, useRef, useCallback } from 'react';
import styles from './code.module.scss';

import useCopyableRef from '../../../hooks/useCopyableRef';
import { CodeHeader } from '../codeHeader/CodeHeader';

export const Code = (props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => {
  const preRef = useRef<HTMLPreElement | null>(null);
  const { isCopied, copy } = useCopyableRef<HTMLPreElement>(preRef);

  const getCodeTitle = useCallback(() => {
    if (isValidElement(props.children)) {
      if ('data-title' in props.children.props) {
        return props.children.props['data-title'] as string;
      }

      return undefined;
    }
    return undefined;
  }, [props.children]);

  console.log(props.children);

  return (
    <article className={styles.wrapper}>
      <CodeHeader
        code={preRef.current?.textContent}
        onCopy={copy}
        isCopied={isCopied}
        className={props.className}
        title={getCodeTitle()}
      />
      <pre ref={preRef} {...props}>
        {isValidElement(props.children) && <code {...props.children.props} />}
      </pre>
    </article>
  );
};
