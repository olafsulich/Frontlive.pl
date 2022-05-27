import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useRegisterActions } from 'kbar';
import LinkIcon from '../../../../public/icons/link.svg';
import UndoIcon from '../../../../public/icons/undo.svg';

export const useHelperActions = () => {
  const router = useRouter();

  const actions = useMemo(
    () => [
      {
        id: 'undo',
        name: 'Wróć',
        shortcut: ['Backspace'],
        keywords: 'wróć',
        perform: () => router.back(),
        section: 'Akcje',
        icon: <UndoIcon />,
      },
      {
        id: 'copy',
        name: 'Skopiuj adres URL',
        shortcut: ['u'],
        keywords: 'kopiuj',
        perform: () =>
          navigator.clipboard
            .writeText(`frontlive.pl${router.pathname}`)
            .then(() => {})
            .catch(),

        section: 'Akcje',
        icon: <LinkIcon />,
      },
    ],
    [],
  );

  return useRegisterActions(actions);
};
