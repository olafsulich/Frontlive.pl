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

module.exports = withPolyfills(
  withOffline(
    withOptimizedImages({
      imagesFolder: 'images',

      workboxOpts: {
        exclude: [/\.(?:png|jpg|jpeg|svg|webp)$/],
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 5,
              },
            },
          },
        ],
      },

      sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
    }),
  ),
);
