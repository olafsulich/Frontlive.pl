import { useCallback, memo, Children, cloneElement, ReactElement } from 'react';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';
import cn from 'classnames';

type ActiveLinkProps = {
  activeClassName: string;
  children: ReactElement<HTMLAnchorElement>;
} & LinkProps;

export const ActiveLink = memo<ActiveLinkProps>(
  ({ children, activeClassName, href, as, ...props }) => {
    const { asPath } = useRouter();
    const child = Children.only(children);

    const shouldAddClassName = useCallback(() => {
      return asPath === href || asPath === as;
    }, []);

    const newChild = cloneElement(child, {
      ...child.props,
      className: cn(child.props.className, { [activeClassName]: shouldAddClassName() }),
    });

    return (
      <Link href={href} {...props}>
        {newChild}
      </Link>
    );
  },
);
