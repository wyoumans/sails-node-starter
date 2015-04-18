/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * Only applies to HTTP requests (not WebSockets)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.http.html
 */

module.exports.http = {

  /****************************************************************************
   *                                                                           *
   * Express middleware to use for every Sails request. To add custom          *
   * middleware to the mix, add a function to the middleware config object and *
   * add its key to the "order" array. The $custom key is reserved for         *
   * backwards-compatibility with Sails v0.9.x apps that use the               *
   * `customMiddleware` config option.                                         *
   *                                                                           *
   ****************************************************************************/

  middleware: {

  /***************************************************************************
   *                                                                          *
   * The order in which middleware should be run for HTTP request. (the Sails *
   * router is invoked by the "router" middleware below.)                     *
   *                                                                          *
   ***************************************************************************/

    order: [
      'startRequestTimer',
      'cookieParser',
      'session',
      // 'passport',
      'viewDefaults',
      'bodyParser',
      'handleBodyParserError',
      'compress',
      'methodOverride',
      // 'redirects',
      'router',
      'www',
      'favicon',
      '404',
      '500'
    ],

    /****************************************************************************
     *                                                                           *
     * Custom middleware; Sets default view locals                               *
     *                                                                           *
     ****************************************************************************/

    viewDefaults: function(req, res, next) {
      res.locals.projectTitle = 'Will\'s Node.js Starter';
      res.locals.showPageHeader = true;
      res.locals.showNavigation = true;
      res.locals.showNavigationSearch = true;
      res.locals.wrapperClass = '';
      res.locals.bodyClass = '';
      res.locals.title = '';
      res.locals.subtitle = '';
      res.locals.path = req.path;
      res.locals.useCDN = true;

      res.locals.headerNavigation = [{
        title: 'Home',
        href: '/'
      }, {
        title: 'About',
        href: '/about'
      }, {
        title: 'Contact',
        href: '/contact'
      }];

      res.locals.footerNavigation = [{
        title: 'Terms &amp; Conditions',
        href: '/terms'
      }];

      return next();
    },

    /****************************************************************************
     *                                                                           *
     * Custom middleware; Sets default view locals                               *
     *                                                                           *
     ****************************************************************************/
/*
    passport: function(req, res, next) {
      // Initialize Passport
      passport.initialize()(req, res, function() {
        // Use the built-in sessions
        passport.session()(req, res, function() {
          // Make the user available throughout the frontend
          res.locals.user = req.user;

          return next();
        });
      });
    },
*/
/*
    redirects: function(req, res, next) {

      Redirect.findOne({
        oldUrl: req.url
      }).exec(function(err, redirect) {
        if (redirect) {
          res.redirect(301, redirect.newUrl);
        } else {
          return next();
        }
      });
    }
*/
  },

  /***************************************************************************
   *                                                                          *
   * The number of seconds to cache flat files on disk being served by        *
   * Express static middleware (by default, these files are in `.tmp/public`) *
   *                                                                          *
   * The HTTP static cache is only active in a 'production' environment,      *
   * since that's the only time Express will cache flat-files.                *
   *                                                                          *
   ***************************************************************************/

  cache: 31557600000
};
