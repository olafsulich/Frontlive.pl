import { ReactNode, useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { MDXRemote } from 'next-mdx-remote';
import { getPostBySlug, getPostsPaths } from '../../lib/posts';
import { Layout } from '../../components/layout/Layout';
import { Navigation } from '../../components/navigation/Navigation';
import { Image } from '../../components/mdx/image/Image';
import Sparkles from '../../components/shared/components/sparkles/Sparkles';
import { Mdx } from '../../components/mdx/Mdx';
import { useCallback, useMemo } from 'react';
import { Heading } from '../../components/mdx/heading/Heading';
import { useRouter } from 'next/router';

type ComponentProps = {
  readonly children: ReactNode;
};

type HeadingComponentProps = {
  readonly children: string;
};

type ImageProps = {
  readonly src: string;
  readonly alt: string;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string;
  const { transformedMdx, frontmatter } = await getPostBySlug(slug);

  return {
    props: {
      transformedMdx,
      frontmatter: {
        slug,
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

const BlogPost = ({
  transformedMdx,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, excerpt, publishedAt, slug, image } = frontmatter;
  const url = `https://frontlive.pl/blog/${slug}`;
  const articleImage = `https://frontlive.pl${image}`;
  const getHeadingProps = useCallback(({ children }: HeadingComponentProps) => {
    return {
      slug: children,
      url,
    };
  }, []);

  const customMdxComponents = useMemo(
    () => ({
      h2: (props: HeadingComponentProps) => (
        <Heading headingTag="h2" {...getHeadingProps(props)}></Heading>
      ),
      h3: (props: HeadingComponentProps) => (
        <Heading headingTag="h3" {...getHeadingProps(props)}></Heading>
      ),
      h4: (props: HeadingComponentProps) => (
        <Heading headingTag="h4" {...getHeadingProps(props)}></Heading>
      ),
      h5: (props: HeadingComponentProps) => (
        <Heading headingTag="h5" {...getHeadingProps(props)}></Heading>
      ),
      h6: (props: HeadingComponentProps) => (
        <Heading headingTag="h6" {...getHeadingProps(props)}></Heading>
      ),
      img: ({ alt, src }: ImageProps) => <Image src={src} alt={alt ? alt : ''} />,
      Sparkles,
      Image,
    }),
    [],
  );

 const router = useRouter();

 useEffect(() => {
   const scroll = () => setTimeout(() => window.scroll({ top: 0, left: 0 }), 0);

   router.events.on('routeChangeComplete', scroll);

   return () => {
     router.events.off('routeChangeComplete', scroll);
   };
 }, [router]);

  return (
    <>
      <NextSeo
        title={`Frontlive.pl - ${title}`}
        description={excerpt}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: publishedAt,
          },
          url,
          title,
          description: excerpt,
          images: [
            {
              url: articleImage,
              alt: title,
              width: 1200,
              height: 628,
            },
          ],
        }}
      />
      <ArticleJsonLd
        authorName="Olaf Sulich"
        dateModified={publishedAt}
        datePublished={publishedAt}
        description={excerpt}
        publisherLogo="/favicons/android-chrome-192x192.png"
        publisherName="Olaf Sulich"
        images={[articleImage]}
        title={title}
        url={url}
      />
      <Layout>
        <Navigation />
        <main>
          <Mdx frontmatter={frontmatter}>
            <MDXRemote {...transformedMdx} components={customMdxComponents} />
          </Mdx>
        </main>
      </Layout>
    </>
  );
};

export default BlogPost;
