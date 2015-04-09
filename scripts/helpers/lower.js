'use strict';

function lower(sails, logger, cb) {
  // if no callback is supplied, just kill the script
  cb = cb || function() {
    process.exit();
  };

  sails.lower(function(err) {
    logger.info('Sails lowered');
    return cb(err);
  });

}

module.exports = lower;
