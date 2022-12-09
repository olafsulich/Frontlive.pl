const path = require('path');
require('what-input');

const withBundleAnalyzer = (
  ({ enabled = true } = {}) =>
  (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
      webpack(config, options) {
        if (enabled && !options.isServer) {
          const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
          config.plugins.push(
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              reportFilename: './analyze/client.html',
              excludeAssets: /polyfills-.*\.js/,
              defaultSizes: 'gzip',
            }),
          );
        }

        if (typeof nextConfig.webpack === 'function') {
          return nextConfig.webpack(config, options);
        }
        return config;
      },
    });
  }
)({
  enabled: process.env.ANALYZE === 'true',
});

const withPolyfills = (module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const originalEntry = config.entry;
      config.entry = function entry() {
        return Promise.resolve(originalEntry()).then((entries) => {
          if (entries['main.js'] && !entries['main.js'].includes('./polyfills.ts')) {
            entries['main.js'].unshift('./polyfills.ts');
          }

          return entries;
        });
      };

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
});

const config = withPolyfills(withBundleAnalyzer());

config.sassOptions = {
  includePaths: [path.join(__dirname, 'styles')],
};

// config.images = {
//   deviceSizes: [320, 375, 640, 750, 768, 1024, 1280, 1920],
//   imageSizes: [320, 640, 768, 1200, 1536],
// };

config.rewrites = () => {
  return [
    {
      source: '/discord',
      destination: 'https://discord.gg/XTRkJXwCU9',
      basePath: false,
    },
    {
      source: '/discord-rocznica',
      destination: 'https://forms.gle/YZkrCJU51fAjbLrk6',
      basePath: false,
    },
  ];
};

config.redirects = () => {
  return [
    {
      source: '/discord',
      destination: 'https://discord.gg/XTRkJXwCU9',
      permanent: false,
      basePath: false,
    },
    {
      source: '/blog/react-children-i-typescirpt',
      destination: '/blog/react-children-i-typescript',
      permanent: true,
    },
    {
      source: '/me',
      destination: '/o-mnie',
      permanent: true,
    },
    {
      source: '/css-min-max-clamp',
      destination: '/blog/css-variables',
      permanent: true,
    },
    {
      source: '/react-query-podstawy',
      destination: 'blog/react-query-wprowadzanie',
      permanent: true,
    },
    {
      source: '/czytniki-ekranowe',
      destination: '/blog/dostepnosc-czytniki-ekranowe',
      permanent: true,
    },
    {
      source: '/dostepnosc-top-10-bledow/',
      destination: '/blog/dostepnosc-popularne-bledy',
      permanent: true,
    },
    {
      source: '/dostepnosc-projektowanie-i-semantyczny-html/',
      destination: '/blog/dostepnosc-semantyczny-html',
      permanent: true,
    },
    {
      source: '/dostepnosc-dla-kazdego',
      destination: '/blog/dostepnosc-dla-każdego',
      permanent: true,
    },
    {
      source: '/recenzja-ts-na-powaznie',
      destination: '/blog/recenzja-typescript-na-powaznie',
      permanent: true,
    },
    {
      source: '/graphql-generator',
      destination: '/blog/graphql-generator',
      permanent: true,
    },
    {
      source: '/graphql-apollo',
      destination: '/blog/graphql-apollo',
      permanent: true,
    },
    {
      source: '/graphql-api',
      destination: '/blog/graphql-sredniozaawansowany',
      permanent: true,
    },
    {
      source: '/graphql-podstawy',
      destination: '/blog/graphql-podstawy',
      permanent: true,
    },
    {
      source: '/github-profile',
      destination: '/blog/github-profile-readme',
      permanent: true,
    },
    {
      source: '/svelte',
      destination: '/blog/svelte-podstawy',
      permanent: true,
    },
    {
      source: '/css-houdini',
      destination: '/blog/css-houdini',
      permanent: true,
    },
    {
      source: '/react-concurrent-mode',
      destination: '/blog/react-suspense',
      permanent: true,
    },
    {
      source: '/webpack-konfiguracja',
      destination: '/blog/webpack-konfiguracja',
      permanent: true,
    },
    {
      source: '/webpack-pierwsze-kroki',
      destination: '/blog/webpack-podstawy',
      permanent: true,
    },
    {
      source: '/javascript-es2019',
      destination: '/blog/javascript-es2019',
      permanent: true,
    },
    {
      source: '/atomic-design',
      destination: '/blog/atomic-design',
      permanent: true,
    },
    {
      source: '/typescript-react',
      destination: '/blog/typescript-react',
      permanent: true,
    },
    {
      source: '/typescript-sredniozaawansowany',
      destination: '/blog/typescript-klasy',
      permanent: true,
    },
    {
      source: '/typescript-podstawy',
      destination: '/blog/typescript-podstawy',
      permanent: true,
    },
    {
      source: '/javascript-nullish-coalescing-&-optional-chaining',
      destination: '/blog/javascript-nullish-coalescing',
      permanent: true,
    },
    {
      source: '/circleci-continuous-integration',
      destination: '/blog/continous-integration-z-netlify-i-circleci',
      permanent: true,
    },
    {
      source: '/readme-github',
      destination: '/blog/readme-na-githubie-robisz-to-zle',
      permanent: true,
    },
    {
      source: '/reguly-zabezpieczen-funkcje-deploy',
      destination: '/blog/firebase-deploy',
      permanent: true,
    },
    {
      source: '/dodawanie-danych-do-firestore',
      destination: '/blog/firebase-dodawania-danych-do-firestore',
      permanent: true,
    },
    {
      source: '/pobieranie-danych-z-firestore',
      destination: '/blog/firebase-pobieranie-danych-z-firestore',
      permanent: true,
    },
    {
      source: '/autoryzacja-w-firebase',
      destination: '/blog/firebase-autoryzacja',
      permanent: true,
    },
  ];
};

module.exports = config;
