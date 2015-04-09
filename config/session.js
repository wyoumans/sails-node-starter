/**
 * Session Configuration
 * (sails.config.session)
 *
 * Sails session integration leans heavily on the great work already done by
 * Express, but also unifies Socket.io with the Connect session store. It uses
 * Connect's cookie parser to normalize configuration differences between Express
 * and Socket.io and hooks into Sails' middleware interpreter to allow you to access
 * and auto-save to `req.session` with Socket.io the same way you would with Express.
 *
 * For more information on configuring the session, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.session.html
 */

module.exports.session = {

  secret: '5f3aca33ee4271c86511350b2e0b91bb',

  cookie: {
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  },

  adapter: 'mongo',
  host: 'localhost',
  port: 27017,
  db: 'one_review',
  collection: 'sessions',

};
