import Head from 'next/head';
import Router from 'next/router';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import '../styles/main.scss';
import { MdxCompProvider } from '../components/mdx/provider/MdxProvider';
import * as gtag from '../lib/gtag';

const isProduction = process.env.NODE_ENV === 'production';
const isBrowser = typeof window !== 'undefined';

if (!isProduction && isBrowser) {
  const axe = require('react-axe');
  const AXE_DELAY = 1000;
  axe(React, ReactDOM, AXE_DELAY);
}

// export function reportWebVitals({ id, name, label, value = 1 }: NextWebVitalsMetric) {
//   if (!id || !name || typeof window === 'undefined') {
//     return;
//   }
//   //@ts-ignore
//   window.gtag('event', name, {
//     event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
//     event_label: id,
//     value: Math.round(name === 'CLS' ? value * 1000 : value),
//     non_interaction: true,
//   });
// }

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.reportPageView(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [Router.events]);
  return (
    <MdxCompProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-title" content="Frontlive.pl" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Optimize loading local fonts with Critical foft with preload. Read more https://www.zachleat.com/web/comprehensive-webfonts/#critical-foft-preload;
              (() => {
                if( "fonts" in document ) {
                // Optimization for Repeat Views
                if( sessionStorage.fontsLoadedCriticalFoftPreload ) {
                  document.documentElement.className += " fonts-loaded-2";
                  return;
                }

                document.fonts.load("1em Criteria").then(function () {
                  document.documentElement.className += " fonts-loaded-1";

                  Promise.all([
                    document.fonts.load("500 1em Criteria Demi"),
                  ]).then(function () {
                    document.documentElement.className += " fonts-loaded-2";

                    // Optimization for Repeat Views
                    sessionStorage.fontsLoadedCriticalFoftPreload = true;
                  });
              });
              }
            })();
        `,
          }}
        />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </MdxCompProvider>
  );
}
