import Head from 'next/head';
import Router from 'next/router';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import '@code-hike/mdx/dist/index.css';
import '../styles/main.scss';
import '@codesandbox/sandpack-react/dist/index.css';

// import * as gtag from '../lib/gtag';
// import { loadFonts } from '../lib/fonts';

// const isProduction = process.env.NODE_ENV === 'production';
// const isBrowser = typeof window !== 'undefined';

// if (!isProduction && isBrowser) {
//   const axe = require('react-axe');
//   const AXE_DELAY = 1000;
//   axe(React, ReactDOM, AXE_DELAY);
// }

export default function MyApp({ Component, pageProps }: AppProps) {
  //   loadFonts();

  //   useEffect(() => {
  //     if (isProduction && isBrowser) {
  //       const handleRouteChange = (url: string) => {
  //         gtag.reportPageView(url);
  //       };
  //       Router.events.on('routeChangeComplete', handleRouteChange);
  //       return () => {
  //         Router.events.off('routeChangeComplete', handleRouteChange);
  //       };
  //     }
  //     return () => false;
  //   }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
