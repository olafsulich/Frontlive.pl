import matter from 'gray-matter';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import remarkAutoLinkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';
import remarkCodeTitles from 'remark-code-titles';
import mdxPrism from 'mdx-prism';
import readingTime from 'reading-time';
import path from 'path';
import fs from 'fs';
import { postFilePaths, POSTS_PATH } from 'lib/mdx';
import Layout from 'components/layout/Layout';
import Navigation from 'components/navigation/Navigation';
import Heading from 'components/shared/components/heading/Heading';
import Footer from 'components/footer/Footer';

const components = {
  a: () => <a>SIEMA</a>,
};

const BlogPost = ({ source, frontMatter }: any) => {
  const content = hydrate(source, { components });
  const timeToRead = readingTime(source.renderedOutput);

  return (
    <Layout>
      <Navigation />

      <main>
        {/* <Heading>{frontMatter.title}</Heading> */}
        {content}
      </main>
      <Footer />
    </Layout>
  );
};

export default BlogPost;

export const getStaticProps = async ({ params }: any) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [remarkAutoLinkHeadings, remarkSlug, remarkCodeTitles],
      rehypePlugins: [mdxPrism],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path: string) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug: string) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
