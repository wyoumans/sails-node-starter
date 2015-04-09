'use strict';

var Sails = require('sails');

function lift(cb) {
  cb = cb || function() {};

  Sails.lift({
    log: {
      level: 'error'
    },
    port: 9999
  }, function(err, sails) {
    // logger must be required after sails is lifted
    var logger = require('../../api/helpers').logger;

    if (err) {
      return logger.error(err);
    }

    logger.info('Sails lifted');

    return cb(err, sails, logger);
  });
}

module.exports = lift;
