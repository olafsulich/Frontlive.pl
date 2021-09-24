import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/navigation/Navigation';
import { getSnippets } from '../lib/snippets';
import { Snippets } from '../components/snippets/Snippets';
import { MDXRemote } from 'next-mdx-remote';
import Highlight, { defaultProps } from 'prism-react-renderer';

export const getStaticProps: GetStaticProps = async () => {
  const snippets = await getSnippets();

  return {
    props: {
      snippets,
    },
    revalidate: 1,
  };
};

const title = 'Frontlive.pl - Snippety';
const description = 'Najbardziej konkretne artykuły dla frontend developerów!';
const url = 'https://frontlive.pl/snippety';

export default function SnippetsPage({ snippets }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(snippets);
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <Layout>
        <Navigation />
        <Snippets snippets={snippets} />
      </Layout>
    </>
  );
}
