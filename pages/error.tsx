import { Header } from '../components/header/Header';
import { Layout } from '../components/layout/Layout';
import { Workshop } from '../components/workshop/Workshop';
import { Navigation } from '../components/navigation/Navigation';
import { Heading } from 'components/shared/components/heading/Heading';
import { Footer } from 'components/footer/Footer';

export default function Error() {
  return (
    <>
      <Layout>
        <Navigation />
        <main id="main" className="error">
          <section className="error">
            <Heading tag="h1" variant="secondary">
              Wystąpił błąd!
            </Heading>
            <img src="images/sad-emoji.png" alt="" />
          </section>
        </main>
      </Layout>
      <Workshop />
      <Footer />
    </>
  );
}
