import { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Heading from './heading/Heading';
import Paragraph from './paragraph/Paragraph';
import Link from './link/Link';
import Blockquote from './blockquote/Blockquote';
import Ul from './ul/Ul';
import Ol from './ol/Ol';
import Pre from './pre/Pre';
import Code from './code/Code';
import Em from './em/Em';

type ComponentProps = {
  children: ReactNode;
};

type LinkComponentProps = {
  href: string;
} & ComponentProps;

const components = {
  h2: (props: ComponentProps) => <Heading tag="h2" {...props} />,
  h3: (props: ComponentProps) => <Heading tag="h3" {...props} />,
  h4: (props: ComponentProps) => <Heading tag="h4" {...props} />,
  h5: (props: ComponentProps) => <Heading tag="h5" {...props} />,
  h6: (props: ComponentProps) => <Heading tag="h6" {...props} />,
  p: (props: ComponentProps) => <Paragraph {...props} />,
  a: (props: LinkComponentProps) => <Link {...props} />,
  blockquote: (props: ComponentProps) => <Blockquote {...props} />,
  ul: (props: ComponentProps) => <Ul {...props} />,
  ol: (props: ComponentProps) => <Ol {...props} />,
  pre: (props: ComponentProps) => <Pre {...props} />,
  code: (props: ComponentProps) => <Code {...props} />,
  em: (props: ComponentProps) => <Em {...props} />,
};

const MdxCompProvider = ({ children }: ComponentProps) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MdxCompProvider;
