import { useMemo } from 'react';
import { useRegisterActions } from 'kbar';
import { useRouter } from 'next/router';
import { categoriesArr } from '../../../../data/categories';

function randomId() {
  return Math.random().toString(36).substring(2, 9);
}

export const useCategoriesActions = () => {
  const router = useRouter();

  const actions = useMemo(
    () =>
      categoriesArr.map((category) => ({
        id: randomId(),
        parent: 'categoriesList',
        name: category.title,
        keywords: category.title,
        section: 'Kategorie',
        perform: () => router.push(category.path),
      })),
    [router],
  );

  useRegisterActions(actions);
};
