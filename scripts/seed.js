'use strict';

var data     = require('./data'),
    helpers  = require('./helpers'),
    lift     = helpers.lift,
    lower    = helpers.lower,
    ownerIds = [],
    logger   = undefined;

(function() {

  lift(function(err, sails, sailsLogger) {
    logger = sailsLogger;

    async.series([
      seedPackages,
      seedUsers,
      seedCompanies,
      seedClubs
    ], finish);
  });

})();

function seedPackages(done) {
  logger.info('Populating packages (coming soon)');
  async.each(data.packages, function(packageData, nextPackage) {
    return nextPackage();
  }, done);
};

function seedUsers(done) {
  logger.info('Populating users (coming soon)');
  async.each(data.placeholders.users, function(userData, nextUser) {
    return nextUser();
  }, done);
};

function seedCompanies(done) {
  logger.info('Populating companies (coming soon)');
  async.each(data.placeholders.companies, function(companyData, nextCompany) {
    return nextCompany();
  }, done);
};

function seedClubs(done) {
  logger.info('Populating clubs (coming soon)');
  async.each(data.placeholders.clubs, function(clubData, nextClub) {
    return nextClub();
  }, done);
};

function finish(err, results) {

  if (err) {
    return logger.error(err);
  }

  lower(sails, logger);
};
