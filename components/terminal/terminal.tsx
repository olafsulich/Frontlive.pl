import { ReactTerminal, TerminalContextProvider } from 'react-terminal';

export const Terminal = () => {
  const commands = {
    whoami: (
      <div>
        <span>siema</span>
        <span>elo</span>
      </div>
    ),
    cd: (directory: string) => `changed path to ${directory}`,
  };

  const theme = {
    custom: {
      themeBGColor: '#17191a',
      themeToolbarColor: '#222',
      themeColor: '#6b7177',
      themePromptColor: '#fff',
    },
  };

  return (
    <TerminalContextProvider>
      <ReactTerminal
        commands={commands}
        themes={theme}
        theme="custom"
        prompt="$"
        errorMessage="nie znaleziono!"
      />
    </TerminalContextProvider>
  );
};
