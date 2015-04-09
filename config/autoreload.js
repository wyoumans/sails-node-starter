/**
 * Autoreload Hook
 * (sails.config.autoreload)

 * For more information on autoreload hook, check out:
 * https://github.com/sgress454/sails-hook-autoreload
 */

module.exports.autoreload = {
  active: true,
  usePolling: false,
  dirs: [
    'api/models',
    'api/controllers',
    'api/services',
    'api/policies',
    'api/helpers',
    'api/responses'
  ]
};
