import type { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Heading from './heading/Heading';
import Paragraph from './paragraph/Paragraph';
import Link from './link/Link';
import Blockquote from './blockquote/Blockquote';
import Ul from './ul/Ul';
import Ol from './ol/Ol';
import Pre from './pre/Pre';
import Code from './code/Code';

const components = {
  h2: (props: any) => <Heading tag="h2" {...props} />,
  h3: (props: any) => <Heading tag="h3" {...props} />,
  h4: (props: any) => <Heading tag="h4" {...props} />,
  h5: (props: any) => <Heading tag="h5" {...props} />,
  h6: (props: any) => <Heading tag="h6" {...props} />,
  p: (props: any) => <Paragraph {...props} />,
  a: (props: any) => <Link href={props.href} {...props} />,
  blockquote: (props: any) => <Blockquote {...props} />,
  ul: (props: any) => <Ul {...props} />,
  ol: (props: any) => <Ol {...props} />,
  pre: (props: any) => <Pre {...props} />,
  code: (props: any) => <Code {...props} />,
};

type MdxCompProviderProps = { children: ReactNode };

const MdxCompProvider = ({ children }: MdxCompProviderProps) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MdxCompProvider;
