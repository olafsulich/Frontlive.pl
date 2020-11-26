import { GetStaticProps, InferGetStaticPropsType } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import readingTime from 'reading-time';
import { getPostBySlug, getPostsPaths } from 'lib/mdx';
import Layout from 'components/layout/Layout';
import Navigation from 'components/navigation/Navigation';
import Mdx from '../../components/mdx/Mdx';
import Footer from 'components/footer/Footer';
import { HeaderProvider } from 'components/shared/context/HeaderContext';
import Workshop from '../../components/workshop/Workshop';

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { transformedMdx, frontmatter } = await getPostBySlug(params.slug);

  return {
    props: {
      transformedMdx,
      frontmatter,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const paths = getPostsPaths();

  return {
    paths,
    fallback: false,
  };
};

const BlogPost = ({
  transformedMdx,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const content = hydrate(transformedMdx);
  const timeToRead = readingTime(transformedMdx.renderedOutput);

  return (
    <>
      <Layout>
        <Navigation />
      </Layout>
      <main>
        <Mdx title={frontmatter.title} content={content} />
      </main>
      <Workshop />
      <Layout>
        <Footer />
      </Layout>
    </>
  );
};

export default BlogPost;
