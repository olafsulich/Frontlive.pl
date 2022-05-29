import React, { ReactNode, useRef } from 'react';
import useCopyableRef from '../../../hooks/useCopyableRef';
import styles from './codeWithTitle.module.scss';
import { Code } from '../code/Code';

type CodeWithTitleProps = {
  children: ReactNode;
};

export const CodeWithTitle = ({ children }: CodeWithTitleProps) => {
  const preRef = useRef<HTMLPreElement | null>(null);
  const { isCopied, copy } = useCopyableRef<HTMLPreElement>(preRef);

  return null;
};
