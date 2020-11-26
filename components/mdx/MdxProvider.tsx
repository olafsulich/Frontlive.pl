import type { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import MdxHeading from './mdxHeading/MdxHeading';

const components = {
  h2: (props: any) => <MdxHeading tag="h2" {...props} />,
  h3: (props: any) => <MdxHeading tag="h3" {...props} />,
  h4: (props: any) => <MdxHeading tag="h4" {...props} />,
  h5: (props: any) => <MdxHeading tag="h5" {...props} />,
  h6: (props: any) => <MdxHeading tag="h6" {...props} />,
};

type MdxCompProviderProps = { children: ReactNode };

const MdxCompProvider = ({ children }: MdxCompProviderProps) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MdxCompProvider;
