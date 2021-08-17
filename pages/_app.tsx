import Head from 'next/head';
import Router from 'next/router';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import '../styles/main.scss';
import * as gtag from '../lib/gtag';
import { loadFonts } from '../lib/fonts';
import { HeaderProvider } from '../components/shared/context/HeaderContext';

const isProduction = process.env.NODE_ENV === 'production';
const isBrowser = typeof window !== 'undefined';

if (!isProduction && isBrowser) {
  const axe = require('react-axe');
  const AXE_DELAY = 1000;
  axe(React, ReactDOM, AXE_DELAY);
}

export default function MyApp({ Component, pageProps }: AppProps) {
  loadFonts();
  //   const router = useRouter();

  //   useEffect(() => {
  //     const handleRouteChange = (url: string) => {
  //       gtag.reportPageView(url);
  //     };
  //     router.events.on('routeChangeComplete', handleRouteChange);
  //     return () => {
  //       router.events.off('routeChangeComplete', handleRouteChange);
  //     };
  //   }, []);

  useEffect(() => {
    const scroll = () => setTimeout(() => window.scroll({ top: 0, left: 0 }), 0);
    console.log('scrolllllllllXDDD');

    Router.events.on('routeChangeComplete', scroll);

    return () => {
      Router.events.off('routeChangeComplete', scroll);
    };
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <HeaderProvider>
        <Component {...pageProps} />
      </HeaderProvider>
    </>
  );
}
