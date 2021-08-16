import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import { Layout } from '../../components/layout/Layout';
import { PostsListing } from '../../components/blog/postsListing/PostsListing';
import { Heading } from '../../components/shared/components/heading/Heading';
import { Categories } from '../../components/categories/Categories';
import { Navigation } from '../../components/navigation/Navigation';
import { Blog } from '../../components/blog/Blog';

const postsArr: any[] = [
  {
    title: 'Nowoczesny CSS - min(), max() i clamp()',
    excerpt:
      'Po ostatnim wprowadzającym wpisie przyszedł czas na przykłady z życia wzięte. Dzisiaj przetestujemy sobie komponent, który bardzo często znajduję się w naszych codebasach. Przez jednych lubiany, przez drugich znienawidzony - formularz...',
  },
  {
    title: 'TypeScript - React, Redux i Styled Components',
    excerpt:
      'Dokładnie rok temu na tym blogu pojawił się pierwszy wpis. Pomyślałem, że warto podsumować sobie ten rok i przedstawić Ci plany na przyszłość!',
  },
  {
    title: 'Dostępność - czytniki ekranowe i testowanie',
    excerpt:
      'React Testing Library to najpopularniejsza biblioteka do testowania kodu napisanego w React. Wchodzi ona w skład większej całości - DOM Testing Library...',
  },
  {
    title: 'React Testing Library - testy accessibility',
    excerpt:
      'Testować accessibility możemy różnymi narzędziami i na różne sposoby... Warto wspomnieć o świetnych pluginach do ESlinta i Cypressa. Dzisiaj jednak na tapet bierzemy testy dostępności skupione na zakresie komponentu z pomocą biblioteki jest-axe.',
  },
  {
    title: 'React Testing Library - Mock Service Worker',
    excerpt:
      'Pogadajmy przez chwilę o mockowaniu, a szczególnie o mockowaniu fetcha/axiosa przy testowaniu komponentów, które pobierają nasze dane np. z zewnętrznego API.',
  },
  {
    title: 'React Testing Library - testy w praktyce',
    excerpt:
      'Po ostatnim wprowadzającym wpisie przyszedł czas na przykłady z życia wzięte. Dzisiaj przetestujemy sobie komponent, który bardzo często znajduję się w naszych codebaseach.',
  },
  {
    title: 'Testowanie JS - podstawy',
    excerpt:
      'Jakiś czas temu wysłałem do osób, które są zapisane do newslettera, krótką ankietę. Zawierała ona jedno, kluczowe pytanie - Czego chcesz się nauczyć? Mogliście wybrać proponowane przeze mnie tematy lub napisać coś od siebie. Ku mojemu zaskoczeniu, dużą przewagą, wygrało Testowanie!',
  },
  {
    title: 'Nowoczesny CSS - CSS Variables',
    excerpt:
      'Chociaż CSS nie jest językiem programowania, to posiada swoje zmienne. Czym są i jak się ich używa? Do jakich celów możesz je wykorzystać?',
  },
];

const categoriesArr = [
  { title: 'TypeScript', path: '' },
  { title: 'Jest', path: '' },
  { title: 'JavaScript', path: '' },
  { title: 'Dostępność', path: '' },
  { title: 'React', path: '' },
  { title: 'CSS', path: '' },
  { title: 'Svelte', path: '' },
  { title: 'GraphQL', path: '' },
  { title: 'Firebase', path: '' },
  { title: 'Inne', path: '' },
  { title: 'DevOps', path: '' },
  { title: 'Webpack', path: '' },
];

export default function Index({ posts }: any) {
  return (
    <Layout>
      <Navigation />
      <Blog posts={postsArr} categories={categoriesArr} />
    </Layout>
  );
}
