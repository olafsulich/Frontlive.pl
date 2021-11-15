import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Header } from '../components/header/Header';
import { Layout } from '../components/layout/Layout';
import { Grid } from '../components/shared/components/grid/Grid';
import { PostsListing } from '../components/blog/postsListing/PostsListing';
import { Heading } from '../components/shared/components/heading/Heading';
import { CategoriesList } from '../components/category/categoriesList/CategoriesList';
import { NewsletterForm } from '../components/shared/components/newsletter/newsletterForm/NewsletterForm';
import { Author } from '../components/autor/Autor';
import { Navigation } from '../components/navigation/Navigation';
import { Community } from '../components/community/Community';
import { Footer } from '../components/footer/Footer';
import { getNewestPosts } from '../lib/posts';
import { NextSeo } from 'next-seo';
import { categoriesArr } from '../data/categories';
import { FeaturedPost } from '../components/blog/postsListing/featuredPost/FeaturedPost';
import { ArrowRow } from '../components/shared/components/arrowRow/ArrowRow';
import { Newsletter } from '../components/shared/components/newsletter/Newsletter';

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
  const { title, excerpt, category, image, slug, timeToRead } = posts[0];
  const [, ...postsWithoutFirst] = posts;
  return (
    <>
      <NextSeo />
      <Layout>
        <Header>
          <Navigation />
        </Header>{' '}
        <main id="main" className="mainWrapper">
          <Heading className="visually-hidden" tag="h2" variant="tertiary">
            Najnowsze
          </Heading>
          <FeaturedPost
            key={title}
            path={`/blog/${slug}`}
            heading={title}
            excerpt={excerpt}
            category={category}
            image={image}
            timeToRead={timeToRead}
          />
          <Grid>
            <PostsListing posts={postsWithoutFirst} />
          </Grid>
          <ArrowRow position="right" />
          <Newsletter />
          <ArrowRow position="left" />
        </main>
      </Layout>
    </>
  );
}
