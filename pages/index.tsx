import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { bundleMDX } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
// import { remarkCodeHike } from '@code-hike/mdx';
import { Sandpack } from '@codesandbox/sandpack-react';
import fs from 'fs';
import path from 'path';
import { remarkCodeHike } from '@code-hike/mdx';
import { Header } from '../components/layout/header/header';
import { Footer } from '../components/layout/footer/footer';
import { Hero } from '../components/layout/hero/hero';
import { Community } from '../components/layout/community/community';
import remarkPrism from 'remark-prism';
import remarkGfm from 'remark-gfm';

export default function Index() {

  return (
    <>
      <NextSeo />
      <div style={{ maxWidth: '1450px', margin: '0 auto' }}>
        <Header />
        <main>
          <Hero />
          {/* <LinkPreview
            name="link"
            href="/"
            preview="https://opengraph.githubassets.com/3e6990606db1c0fa18fdebc3c0bdbe149090f5dd69e85bdf29f8458ca29d59ef/radix-ui/primitives/issues/1181"
          /> */}
          <Community />
          {/* <Component /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}
