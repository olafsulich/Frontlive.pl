import Head from 'next/head';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import React from 'react';
import ReactDOM from 'react-dom';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import '../styles/main.scss';
import { MdxCompProvider } from '../components/mdx/provider/MdxProvider';

const isProduction = process.env.NODE_ENV === 'production';
const isBrowser = typeof window !== 'undefined';

if (!isProduction && isBrowser) {
  const axe = require('react-axe');
  const AXE_DELAY = 1000;
  axe(React, ReactDOM, AXE_DELAY);
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric);
// }

export default function MyApp({ Component, pageProps }: AppProps) {
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
      <style jsx>
        {`
          @font-face {
            font-family: 'Criteria';
            src: url('/fonts/CriteriaCFBold.woff') format('woff'),
              url('/fonts/CriteriaCFBold.ttf') format('truetype');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Criteria Demi';
            src: url('/fonts/CriteriaCFDemibold.woff') format('woff'),
              url('/fonts/CriteriaCFDemibold.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </MdxCompProvider>
  );
}
