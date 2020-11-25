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

const components = {
  a: () => <a>SIEMA</a>,
};

const BlogPost = ({ source, frontmatter }: any) => {
  const content = hydrate(source, { components });
  console.log(frontmatter);
  return (
    <div>
      <h1>frontmatter.title</h1>
      {content}
    </div>
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
      extendFrontMatter: {
        process: (mdxContent: string) => ({
          wordCount: mdxContent.split(/\s+/gu).length,
          readingTime: readingTime(mdxContent),
        }),
      },
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
