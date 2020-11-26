import { GetStaticProps, InferGetStaticPropsType } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import readingTime from 'reading-time';
import { getPostBySlug, getPostsPaths } from 'lib/mdx';
import Layout from 'components/layout/Layout';
import Navigation from 'components/navigation/Navigation';
import Mdx from '../../components/mdx/Mdx';

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
    <Layout>
      <Navigation />
      <main>
        <Mdx title={frontmatter.title} content={content} />
      </main>
    </Layout>
  );
};

export default BlogPost;
