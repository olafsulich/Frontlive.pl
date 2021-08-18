import { useEffect } from 'react';

export const ScriptAfterInteraction = ({
  children,
  id,
  ...props
}: Partial<Omit<HTMLScriptElement, 'children'>> & {
  readonly children?: string;
  readonly id: string;
}) => {
  useEffect(() => {
    window.addEventListener('scroll', listener, { passive: true, once: true });

    if (sessionStorage['s' + id]) {
      // hopefully the script is cached at this point
      listener();
    }

    return () => {
      window.removeEventListener('scroll', listener);
    };

    function listener() {
      sessionStorage['s' + id] = true;
      window.removeEventListener('scroll', listener);
      (window.requestIdleCallback || window.requestAnimationFrame)(() => {
        const script = Object.entries(props).reduce((script, [key, value]) => {
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/no-unsafe-member-access -- we know that value is a keyof script
          script[key as any] = value;
          return script;
        }, document.createElement('script'));
        if (children) {
          script.textContent = children;
        }
        document.body.appendChild(script);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- ignore
  }, []);

  return null;
};
