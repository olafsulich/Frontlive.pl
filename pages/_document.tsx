import Document, { Main, Head, Html, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html
        lang="pl-PL"
        prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#"
        itemScope
        itemType="http://schema.org/WebPage"
      >
        <Head>
          <link
            rel="preload"
            href="/fonts/CriteriaCFBold.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/CriteriaCFDemibold.woff"
            type="font/woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/CriteriaCFBold.ttf"
            type="font/ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/CriteriaCFDemibold.ttf"
            type="font/ttf"
            as="font"
            crossOrigin=""
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap"
            as="stylesheet"
          />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@600&display=swap"
            as="stylesheet"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="favicons/safari-pinned-tab.svg" color="#ffffff" />
          <link rel="alternate" title="rss feed" type="application/rss+xml" href="/rss.xml" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="apple-mobile-web-app-title" content="Frontlive" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
          `,
            }}
          />
          <script
            defer
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
          />
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "5ac2428685874efb86c8c912d27be908"}'
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
