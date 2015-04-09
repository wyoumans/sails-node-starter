'use strict';

var winston = require('winston'),
    fs = require('fs'),
    logDirectory = __dirname + '/../../logs',
    logFile = __dirname + '/../../logs/debug.log',
    transports = [];

if (sails.config.log.logToFile) {
  // ensure directories and files exist for logging
  var logsExist = fs.existsSync(logDirectory);

  if (!logsExist) {
    fs.mkdirSync(logDirectory);
    fs.writeFileSync(logFile, "File Created at: " + new Date().toString() + "\n\n");
  }

  transports.push(new(winston.transports.File)({
    timestamp: true,
    filename: logFile,
    handleExceptions: true
  }));
} else {

  transports.push(new(winston.transports.Console)({
    colorize: true,
    handleExceptions: true
  }));
}

var logger = require('captains-log')({
  custom: new(winston.Logger)({
    transports: transports,
    exitOnError: false
  })
});

module.exports = logger;
