import Highlight, { defaultProps } from 'prism-react-renderer';

type CodeProps = {
  code: string;
};

export const Code = ({ code }: CodeProps) => (
  <Highlight {...defaultProps} theme={undefined} code={code} language="tsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre>
        <code>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </code>
      </pre>
    )}
  </Highlight>
);
