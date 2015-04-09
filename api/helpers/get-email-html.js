'use strict';

var fs      = require('fs'),
    jade    = require('jade'),
    getHost = require('./get-host');

module.exports = function(template, locals) {
  var pathToTemplate = __dirname + '/../../views/email/' + template + '.jade',
      content = fs.readFileSync(pathToTemplate, 'utf-8');

  locals.host = getHost();

  var templateJade = jade.compile(content, {
    filename: pathToTemplate,
    pretty: true
  });

  return templateJade(locals);
};
