import { Sandpack } from '@codesandbox/sandpack-react';

const nightOwlTheme: any = {
  palette: {
    activeText: '#B7BCC7',
    defaultText: '#343b41',
    inactiveText: '#222',
    activeBackground: '#17191b',
    defaultBackground: '#17191b',
    inputBackground: '#222',
    accent: '#acb1b6',
    errorBackground: '#ffcdca',
    errorForeground: '#811e18',
  },
  syntax: {
    plain: '#acb1b6',
    comment: { color: '#343b41', fontStyle: 'italic' },
    keyword: { color: '#999', fontStyle: 'italic' },
    tag: '#e8ecf0',
    punctuation: '#999',
    definition: '#acb1b6',
    property: { color: '#8d9398', fontStyle: 'italic' },
    static: '#7e8489',
    string: '#878d92',
  },
  typography: {
    bodyFont: 'Ubuntu,Droid Sans,-apple-system,BlinkMacSystemFont,Segoe WPC,Segoe UI,sans-serif"',
    monoFont:
      '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    fontSize: '16px',
    lineHeight: '1.4',
  },
};

const APP_CODE = `
export default function App() {
  return <>
    <h1>Hello Sandpack!</h1>

  </>
}
`.trim();

export const Playground = () => {
  return (
    <Sandpack
      customSetup={{
        dependencies: {
          lodash: 'latest',
        },
        files: {
          '/app.js': {
            code: APP_CODE,
          },
          '/component.js': {
            code: APP_CODE,
          },
        },
      }}
      template="react"
      theme={{ ...nightOwlTheme }}
    />
  );
};
