import { Layout } from '../../components/layout/Layout';
import { PostsListing } from '../../components/blog/postsListing/PostsListing';
import { Heading } from '../../components/shared/components/heading/Heading';
import { Navigation } from '../../components/navigation/Navigation';
import { Blog } from '../../components/blog/Blog';
import { getAllPosts } from '../../lib/posts';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { BlogJsonLd, NextSeo } from 'next-seo';
import { categoriesArr } from '../../data/categories';

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

const title = 'Frontlive.pl - Blog';
const description = 'Najbardziej konkretne artykuły dla frontend developerów!';
const url = 'https://frontlive.pl/blog';
const imageThumbnail = '/images/blog.png';

export default function BlogPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
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
          images: [
            {
              url: imageThumbnail,
              alt: title,
              width: 1200,
              height: 628,
            },
          ],
        }}
      />

      <Layout>
        <Navigation />
        <Blog posts={posts} categories={categoriesArr} />
      </Layout>
    </>
  );
}
