import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import { Header } from '../../components/layout/header/header';
import { Image } from '../../components/mdx/image/image';
import { Footer } from '../../components/layout/footer/footer';
import { getPostBySlug } from '../../lib/posts';
import { getPost } from '../../lib/mdx';
import { MDX } from '../../components/mdx/mdx';

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: 'test' } }],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps() {
  const { code,frontmatter } = await getPost('test');

  return {
    props: {
      code,
      frontmatter
    },
  };
}

export default function Index({ code,frontmatter }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo />
      <div style={{ maxWidth: '1450px', margin: '0 auto' }}>
        <Header />
        <main>
          <MDX code={code} frontmatter={frontmatter} />
        </main>
        <Footer />
      </div>
    </>
  );
}
