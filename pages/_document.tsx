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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap"
            as="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap"
            rel="stylesheet"
          />
          <link rel="preload" href="/fonts/CriteriaCFBold.otf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/CriteriaCFDemiBold.otf" as="font" crossOrigin="" />
          <link rel="apple-touch-icon" sizes="57x57" href="favicons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="favicons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="favicons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="favicons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="favicons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="favicons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="favicons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="favicons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-icon-180x180.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="favicons/android-icon-192x192.png"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="favicons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
          <meta name="apple-mobile-web-app-title" content="DevFeedback" />
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
