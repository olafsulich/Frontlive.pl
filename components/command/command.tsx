import { useState, useRef } from 'react';
import CommandPalette from 'react-command-palette';
import styles from './command.module.scss';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export const Command = () => {
  const [open, setOpen] = useState(false);
  const showMenu = () => {
      setOpen(true);
  }

  const commands = [
    {
      name: 'Pułapki konstrukcji warunkowych w React i JSX',
      command() {},
    },
    {
      name: 'Remix - konkurencja dla Next.js czy kolejny bezużyteczny framework?',
      command() {},
    },
    {
      name: '5 grzechów Junior Developera - czego nie robić w swojej pierwszej pracy?',
      command() {},
    },
    {
      name: 'Antywzorce w CSS - 10 najczęściej popełnianych błędów',
      command() {},
    },
    {
      name: 'FullStack Next.js z Prisma, Stripe, React Query, Tailwind, NextAuth i TypeScript',
      command() {},
    },
    {
      name: 'React & TypeScript - komponenty generyczne',
      command() {},
    },
    {
      name: 'Preferencje użytkownika a CSS, na co warto zwracać uwagę?',
      command() {},
    },
    {
      name: 'Kompilator to nic strasznego, czyli jak działa Twój kod pod spodem?',
      command() {},
    },
  ];

  const theme = {
    overlay: styles.overlay,
    modal: styles.modal,
    input: styles.input,
    suggestion: styles.suggestion,
    suggestionHighlighted: styles.suggestionHighlighted,
  };

  return (
    <>
      {typeof window !== 'undefined' && (
        <CommandPalette
          open={open}
          commands={commands}
          hotKeys={['command+k', 'ctrl+k']}
          theme={theme}
          placeholder="Szukaj na stronie..."
          onAfterOpen={() => document.documentElement.style.overflow = 'hidden'}
          onRequestClose={() => document.documentElement.style.overflow = 'visible'}
          trigger={
            <button onClick={showMenu} className={styles.button}>
                <div className={styles.desktop}>
                <MagnifyingGlassIcon className={styles.sign} />
              szukaj na stronie
              <div className={styles.keys}>
                <kbd className={styles.key}>
                  <span>⌘</span>
                </kbd>
                <kbd className={styles.key}>
                  <span>K</span>
                </kbd>
              </div>
                </div>
              <span className={styles.mobile}>⌘</span>
            </button>
          }
        />
      )}
    </>
  );
};
