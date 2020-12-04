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
      runtimeCaching: [
        // {
        //   urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
        //   handler: 'CacheFirst',
        //   options: {
        //     cacheName: 'images',
        //     expiration: {
        //       maxEntries: 3,
        //     },
        //   },
        // },
        {
          urlPattern: /^https?.*api/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'offlineCache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60,
              purgeOnQuotaError: true,
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
