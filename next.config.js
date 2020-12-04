const path = require('path');
const withOptimizedImages = require('next-optimized-images');
const withOffline = require('next-offline');

require('what-input');

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

module.exports = withOffline(
  withOptimizedImages({
    imagesFolder: 'images',

    workboxOpts: {
      swDest: process.env.NEXT_EXPORT ? 'service-worker.js' : 'static/service-worker.js',
      exclude: [/\.(?:png|jpg|jpeg|svg|webp)$/],
      // Ignore all URL parameters.
      ignoreURLParametersMatching: [/.*/],
      dontCacheBustURLsMatching: /.*/,
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
          handler: 'CacheFirst',
        },
        {
          urlPattern: /^https?.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'offlineCache',
            expiration: {
              maxEntries: 200,
            },
          },
        },
      ],
    },

    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    async rewrites() {
      return [
        {
          source: '/service-worker.js',
          destination: '/_next/static/service-worker.js',
        },
      ];
    },
  }),
);
