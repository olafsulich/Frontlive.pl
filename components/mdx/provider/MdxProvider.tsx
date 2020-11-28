import { ReactNode, useMemo, useCallback } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import Link from '../link/Link';
import Blockquote from '../blockquote/Blockquote';
import Ul from '../ul/Ul';
import Ol from '../ol/Ol';
import Pre from '../pre/Pre';
import Code from '../code/Code';
import Em from '../em/Em';
import Image from '../image/Image';

type ComponentProps = {
  children: ReactNode;
};

type LinkComponentProps = {
  href: string;
} & ComponentProps;

type HeadingComponentProps = {
  id: string;
  children: {
    0: {
      props: {
        href: string;
        children: ReactNode;
        id: string;
      };
    };
    1: string;
  };
};

type ImageProps = {
  src: string;
  alt: string;
};

const MdxCompProvider = ({ children }: ComponentProps) => {
  const getHeadingProps = useCallback(({ children, id: headingId }: HeadingComponentProps) => {
    const { href, children: linkChildren, id: linkId } = children[0].props;
    const headingProps = children[1];
    return {
      linkChildren,
      linkId,
      headingProps,
      headingId,
      href,
    };
  }, []);

  const mdxComponents = useMemo(
    () => ({
      h2: (props: HeadingComponentProps) => {
        const { linkChildren, linkId, headingProps, headingId, href } = getHeadingProps(props);
        return (
          <Heading tag="h2" id={headingId}>
            <a id={linkId} href={href} aria-hidden="true" tabIndex={-1}>
              {linkChildren}
            </a>
            {headingProps}
          </Heading>
        );
      },
      h3: (props: HeadingComponentProps) => {
        const { linkChildren, linkId, headingProps, headingId, href } = getHeadingProps(props);
        return (
          <Heading tag="h3" id={headingId}>
            <a id={linkId} href={href} aria-hidden="true" tabIndex={-1}>
              {linkChildren}
            </a>
            {headingProps}
          </Heading>
        );
      },
      h4: (props: HeadingComponentProps) => {
        const { linkChildren, linkId, headingProps, headingId, href } = getHeadingProps(props);
        return (
          <Heading tag="h4" id={headingId}>
            <a id={linkId} href={href} aria-hidden="true" tabIndex={-1}>
              {linkChildren}
            </a>
            {headingProps}
          </Heading>
        );
      },
      h5: (props: HeadingComponentProps) => {
        const { linkChildren, linkId, headingProps, headingId, href } = getHeadingProps(props);
        return (
          <Heading tag="h5" id={headingId}>
            <a id={linkId} href={href} aria-hidden="true" tabIndex={-1}>
              {linkChildren}
            </a>
            {headingProps}
          </Heading>
        );
      },
      h6: (props: HeadingComponentProps) => {
        const { linkChildren, linkId, headingProps, headingId, href } = getHeadingProps(props);
        return (
          <Heading tag="h6" id={headingId}>
            <a id={linkId} href={href} aria-hidden="true" tabIndex={-1}>
              {linkChildren}
            </a>
            {headingProps}
          </Heading>
        );
      },
      p: (props: ComponentProps) => <Paragraph {...props} />,
      a: (props: LinkComponentProps) => <Link {...props} />,
      blockquote: (props: ComponentProps) => <Blockquote {...props} />,
      ul: (props: ComponentProps) => <Ul {...props} />,
      ol: (props: ComponentProps) => <Ol {...props} />,
      pre: (props: ComponentProps) => <Pre {...props} />,
      code: (props: ComponentProps) => <Code {...props} />,
      em: (props: ComponentProps) => <Em {...props} />,
      img: (props: ImageProps) => {
        const { alt, src } = props;
        const imageAlt = alt ? alt : '';
        return <Image src={src} alt={imageAlt} />;
      },
    }),
    [],
  );

  return <MDXProvider components={mdxComponents}>{children}</MDXProvider>;
};

export default MdxCompProvider;
