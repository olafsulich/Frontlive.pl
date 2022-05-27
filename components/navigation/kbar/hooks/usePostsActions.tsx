import { useMemo } from 'react';
import { useRegisterActions } from 'kbar';
import { useRouter } from 'next/router';
import { useAppState } from '../../../../context/appContext';
import PencilIcon from '../../../../public/icons/pencil.svg';

function randomId() {
  return Math.random().toString(36).substring(2, 9);
}

export const usePostsActions = () => {
  const posts = useAppState();
  const router = useRouter();

  const actions = useMemo(
    () =>
      posts.map((post) => ({
        id: randomId(),
        parent: 'blogSearch',
        name: post.title,
        keywords: post.category,
        section: 'Blog',
        perform: () => router.push(`/blog/${post.slug}`),
      })),
    [router],
  );

  const rootSearchAction = useMemo(
    () => ({
      id: 'blogSearch',
      name: 'Szukaj artykułów',
      shortcut: ['/'],
      keywords: 'artykuł',
      section: 'Akcje',
      icon: <PencilIcon />,
    }),
    [],
  );

  useRegisterActions([rootSearchAction, ...actions]);
};
