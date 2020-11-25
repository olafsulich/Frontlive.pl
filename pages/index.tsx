import Header from '../components/header/Header';
import PostsListing from '../components/postsListing/PostsListing';

export default function Home() {
  return (
    <>
      <Header />
      <PostsListing heading="Najnowsze" />
      <PostsListing heading="Najpopularniejsze" />
    </>
  );
}
