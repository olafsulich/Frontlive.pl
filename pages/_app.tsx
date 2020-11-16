import Head from 'next/head';
import type { AppProps } from 'next/app';
import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/globals.scss';

const isProduction = process.env.NODE_ENV === 'production';
const isBrowser = typeof window !== 'undefined';

if (!isProduction && isBrowser) {
  const axe = require('react-axe');
  const AXE_DELAY = 1000;
  axe(React, ReactDOM, AXE_DELAY);
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover"
        />
        <meta property="og:type" content="website" />
        <meta name="apple-mobile-web-app-title" content="DevFeedback" />
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        @font-face {
          font-family: 'Criteria';
          src: url('/fonts/CriteriaCFBold.otf');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Criteria Demi';
          src: url('/fonts/CriteriaCFDemiBold.otf');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
    </>
  );
}
