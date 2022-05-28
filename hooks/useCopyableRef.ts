import { RefObject, useRef, useState } from 'react';
import copyToClipboard from 'copy-to-clipboard';

const useCopyableRef = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>) => {
  const [isCopied, setCopied] = useState(false);

  const copy = () => {
    if (isCopied) return;

    if (!ref.current) throw new Error('Ref is nil.');
    copyToClipboard(ref.current.textContent || '');

    setCopied(true);
  };

  return { ref, isCopied, copy };
};

export default useCopyableRef;
