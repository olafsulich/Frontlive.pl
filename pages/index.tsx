import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';
import { Header } from '../components/header/Header';
import { Layout } from '../components/layout/Layout';
import { Grid } from '../components/shared/components/grid/Grid';
import { PostsListing } from '../components/blog/postsListing/PostsListing';
import { Heading } from '../components/shared/components/heading/Heading';

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
];

export default function Index({ posts }: any) {
  return (
    <Layout>
      <Header />
      <Grid>
        <Grid.Item>
          <Heading tag="h2" variant="secondary">
            Najnowsze
          </Heading>
          <PostsListing posts={postsArr} />
        </Grid.Item>
        <Grid.Item tag="div">
          <Grid.Item>
            <Heading tag="h2" variant="secondary">
              Najnowsze
            </Heading>
            <PostsListing posts={postsArr} />
          </Grid.Item>
        </Grid.Item>
      </Grid>
    </Layout>
  );
}
