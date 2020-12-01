import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import hydrate from 'next-mdx-remote/hydrate';
import { getPostBySlug, getPostsPaths } from 'lib/mdx';
import { Layout } from 'components/layout/Layout';
import { Navigation } from 'components/navigation/Navigation';
import { Mdx } from '../../components/mdx/Mdx';
import { Footer } from 'components/footer/Footer';
import { Workshop } from '../../components/workshop/Workshop';
import { Sparkles } from '../../components/shared/components/sparkles/Sparkles';
import { Player } from '../../components/mdx/player/Player';

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { transformedMdx, frontmatter } = await getPostBySlug(params.slug);

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
  const paths = getPostsPaths();

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
  const { title, excerpt, publishedAt, slug } = frontmatter;
  const date = new Date(publishedAt).toISOString();
  const url = `http://frontlive.pl/blog/${slug}`;

  return (
    <>
      <NextSeo
        title={`Frontlive.pl - ${title}`}
        description={excerpt}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: excerpt,
        }}
      />
      <ArticleJsonLd
        authorName="Olaf Sulich"
        dateModified={date}
        datePublished={date}
        description={excerpt}
        publisherLogo="/favicons/android-chrome-192x192.png"
        publisherName="Olaf Sulich"
        images={['/images/category-typescript.png']}
        title={title}
        url={url}
      />
      <Layout>
        <Navigation />
      </Layout>
      <main>
        <Mdx frontmatter={frontmatter} content={content} />
      </main>
      <Workshop />
      <Layout>
        <Footer />
      </Layout>
    </>
  );
};

export default BlogPost;
