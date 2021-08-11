import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';
import { Header } from '../components/header/Header';
import { Layout } from '../components/layout/Layout';

export default function Index({ posts }) {
  return (
    <Layout>
      <Header />
      <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`} href={`/posts/[slug]`}>
              <a>{post.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
