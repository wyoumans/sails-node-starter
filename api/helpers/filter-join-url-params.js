'use strict';

function filterJoinUrlParams(params) {
  return _.reject(params, function(item) {
    return _.isEmpty(item);
  }).join('&');
}

module.exports = filterJoinUrlParams;
