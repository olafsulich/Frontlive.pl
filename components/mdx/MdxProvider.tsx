import type { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Heading from './heading/Heading';
import Paragraph from './paragraph/Paragraph';

const components = {
  h2: (props: any) => <Heading tag="h2" {...props} />,
  h3: (props: any) => <Heading tag="h3" {...props} />,
  h4: (props: any) => <Heading tag="h4" {...props} />,
  h5: (props: any) => <Heading tag="h5" {...props} />,
  h6: (props: any) => <Heading tag="h6" {...props} />,
  p: (props: any) => <Paragraph {...props} />,
};

type MdxCompProviderProps = { children: ReactNode };

const MdxCompProvider = ({ children }: MdxCompProviderProps) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MdxCompProvider;
