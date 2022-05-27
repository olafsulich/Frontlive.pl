import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useRegisterActions } from 'kbar';
import PencilIcon from '../../../../public/icons/pencil.svg';
import HomeIcon from '../../../../public/icons/home.svg';
import CommunityIcon from '../../../../public/icons/community.svg';
import InfoIcon from '../../../../public/icons/info.svg';
import NewsletterIcon from '../../../../public/icons/mail.svg';

export const useNavActions = () => {
  const router = useRouter();

  const actions = useMemo(
    () => [
      {
        id: 'home',
        name: 'Strona główna',
        shortcut: ['h'],
        keywords: 'strona główna',
        perform: () => router.push('/'),
        section: 'Nawigacja',
        icon: <HomeIcon />,
      },
      {
        id: 'blog',
        name: 'Artykuły',
        shortcut: ['a'],
        keywords: 'email',
        perform: () => router.push('/blog'),
        section: 'Nawigacja',
        icon: <PencilIcon />,
      },
      {
        id: 'community',
        name: 'Społeczność',
        keywords: 'społeczność',
        perform: () => router.push('https://discord.gg/XTRkJXwCU9', '_blank'),
        section: 'Nawigacja',
        icon: <CommunityIcon />,
      },
      {
        id: 'about',
        name: 'O mnie',
        keywords: 'o mnie',
        perform: () => router.push('/o-mnie'),
        section: 'Nawigacja',
        icon: <InfoIcon />,
      },
      {
        id: 'newsletter',
        name: 'Newsletter',
        keywords: 'newsletter',
        perform: () => router.push('/newsletter'),
        section: 'Nawigacja',
        icon: <NewsletterIcon />,
      },
    ],
    [],
  );

  return useRegisterActions(actions);
};
