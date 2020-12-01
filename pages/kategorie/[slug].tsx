import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Layout } from '../../components/layout/Layout';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from 'components/footer/Footer';
import { Workshop } from '../../components/workshop/Workshop';
import { getPostsByCategory, getAllPosts } from 'lib/mdx';
import slugify from 'slugify';
import { CategoryPageTemplate } from '../../components/categories/categoryPageTemplate/CategoryPageTemplate';

type Params = {
  slug: string;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPostsByCategory(params!.slug as string);

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map(({ category }) => ({
    params: { slug: slugify(category, { lower: true }) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default function Kategoria({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Layout>
        <Navigation />
        <CategoryPageTemplate posts={posts} category={posts[0].category} />
      </Layout>
      <Workshop />
      <Layout>
        <Footer />
      </Layout>
    </>
  );
}
