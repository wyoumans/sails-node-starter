'use strict';

var fs = require('fs');

module.exports = function(template, locals) {
  var pathToTemplate = __dirname + '/../../views/email/' + template + '.lodash',
    content = fs.readFileSync(pathToTemplate, 'utf-8'),
    templateLodash = _.template(content);

  return templateLodash(locals);
}
