import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Header } from '../components/header/Header';
import { Layout } from '../components/layout/Layout';
import { Grid } from '../components/shared/components/grid/Grid';
import { PostsListing } from '../components/blog/postsListing/PostsListing';
import { Heading } from '../components/shared/components/heading/Heading';
import { Categories } from '../components/categories/Categories';
import { NewsletterForm } from '../components/shared/components/newsletter/newsletterForm/NewsletterForm';
import { Author } from '../components/autor/Autor';
import { Navigation } from '../components/navigation/Navigation';
import { Community } from '../components/community/Community';
import { Footer } from '../components/footer/Footer';
import { getNewestPosts } from '../lib/posts';

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

export const getStaticProps: GetStaticProps = async () => {
  const newestPosts = getNewestPosts();

  return {
    props: {
      posts: newestPosts,
    },
    revalidate: 1,
  };
};

export default function Index({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Header>
        <Navigation />
      </Header>
      <Grid>
        <Grid.Item>
          <Heading tag="h2" variant="tertiary">
            Najnowsze
          </Heading>
          <PostsListing posts={posts} />
        </Grid.Item>
        <Grid.Item tag="div">
          <Grid.Item>
            <Heading tag="h2" variant="tertiary">
              Kategorie
            </Heading>
            <Categories categories={categoriesArr} />
          </Grid.Item>
          <Grid.Item>
            <Heading tag="h2" variant="tertiary">
              Newsletter
            </Heading>
            <NewsletterForm />
          </Grid.Item>
        </Grid.Item>
      </Grid>
    </Layout>
  );
}
