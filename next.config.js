const path = require('path');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withOptimizedImages = require('next-optimized-images');

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
  withPWA(
    withOptimizedImages({
      imagesFolder: 'images',

      pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public',
        runtimeCaching,
        publicExcludes: [/\/images\/*$/],
        buildExcludes: [/chunks\/images\/.*$/],
      },
      sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
    }),
  ),
);
