import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import hydrate from 'next-mdx-remote/hydrate';
import { getProjectBySlug, getProjectsPaths } from 'lib/projects';
import { Layout } from 'components/layout/Layout';
import { Navigation } from 'components/navigation/Navigation';
import { Mdx } from '../../components/mdx/Mdx';
import { Footer } from 'components/footer/Footer';
import { Workshop } from '../../components/workshop/Workshop';
import { Sparkles } from '../../components/shared/components/sparkles/Sparkles';
import { Player } from '../../components/mdx/player/Player';

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { transformedMdx, frontmatter } = await getProjectBySlug(params.slug);

  return {
    props: {
      transformedMdx,
      frontmatter: {
        slug: params.slug,
        ...frontmatter,
      },
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const paths = getProjectsPaths();

  return {
    paths,
    fallback: false,
  };
};

export const customMdxComponents = { Sparkles, Player };

const BlogPost = ({
  transformedMdx,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const content = hydrate(transformedMdx, { components: customMdxComponents });
  const { title, excerpt, slug, imageOpenGraph } = frontmatter;
  const url = `https://frontlive.pl/portfolio/${slug}`;

  return (
    <>
      <NextSeo
        title={title}
        description={excerpt}
        canonical={url}
        openGraph={{
          url,
          title,
          description: excerpt,
          images: [
            {
              url: `https://frontlive.vercel.app${imageOpenGraph}`,
              alt: title,
              width: 1200,
              height: 628,
            },
          ],
        }}
      />
      <Layout>
        <Navigation />
      </Layout>
      <main>
        <Mdx frontmatter={frontmatter} content={content} />
      </main>
      <Workshop />
      <Footer />
    </>
  );
};

export default BlogPost;
