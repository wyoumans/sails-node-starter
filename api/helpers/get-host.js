'use strict';

/**
 * Returns the current host (with or without an http request)
 *
 * @param Object req
 * @return String
 */
function getHost(req) {

  if (req && req.protocol) {
    return req.protocol + '://' + req.get('host');
  }

  return sails.config.hostName;
}

module.exports = getHost;
