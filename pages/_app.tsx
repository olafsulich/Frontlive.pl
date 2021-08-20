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
import { ScriptAfterInteraction } from '../components/shared/components/scriptAfterInteraction/ScriptAfterInteraction';

const isProduction = process.env.NODE_ENV === 'production';
const isBrowser = typeof window !== 'undefined';

if (!isProduction && isBrowser) {
  const axe = require('react-axe');
  const AXE_DELAY = 1000;
  axe(React, ReactDOM, AXE_DELAY);
}

export default function MyApp({ Component, pageProps }: AppProps) {
  loadFonts();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.reportPageView(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
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
      <ScriptAfterInteraction
        id="gtag"
        defer
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
        onload={() => {
          //@ts-ignore
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            //@ts-ignore
            dataLayer.push(arguments);
          }
          //@ts-ignore
          gtag('js', new Date());
          //@ts-ignore
          gtag('config', '${process.env.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        }}
      />
      <ScriptAfterInteraction
        id="gtag"
        defer
        async
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "5ac2428685874efb86c8c912d27be908"}'
      />
      <DefaultSeo {...SEO} />
      <HeaderProvider>
        <Component {...pageProps} />
      </HeaderProvider>
    </>
  );
}
