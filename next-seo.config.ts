const title = 'Frontlive.pl by Olaf Sulich';
const description = 'Najbardziej konkretne artykuły dla frontend developerów';
const url = 'https://frontlive.vercel.app/';
const twitterHandler = '@sulich_olaf';

const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url,
    title,
    description,
    images: [
      {
        url: `${url}images/main.png`,
        alt: title,
        width: 1200,
        height: 628,
      },
    ],
  },
  twitter: {
    handle: twitterHandler,
    site: twitterHandler,
    cardType: 'summary_large_image',
  },
};

export default SEO;
