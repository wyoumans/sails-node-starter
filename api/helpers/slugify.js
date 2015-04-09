'use strict';

var slug = require('slug');

/**
 * Transform text into a URL slug
 *
 * @param String text
 * @return String
 */
function slugify(text) {
  text = '' + text; // ensure it is a string so we can call replace()

  // remove all the "dashlike" utf8 characters and replace them with real dashes
  // http://www.fileformat.info/info/unicode/category/Pd/list.htm
  text = text.replace(/(\u002D|\u058A|\u05BE|\u1400|\u1806|\u2010|\u2011|\u2012|\u2013|\u2014|\u2015|\u2E17|\u2E1A|\u2E3A|\u2E3B|\u301C|\u3030|\u30A0|\uFE31|\uFE32|\uFE58|\uFE63|\uFF0D)/g, '-')

  text = slug(text, ' ') // use slug module to remove strange characters and do some transliteration of utf8 symbols
         .toLowerCase() // remove capitalization
         .replace(/[^a-zA-Z0-9\s]+/ig, '') // remove non-word characters (some punctiation, like ! and :, are technically allowed in the URL, so the slug module keeps them in)
         .replace(/(^\s+|\s+$)/, '') // strip beginning and trailing space
         .replace(/\s+/gi, '-'); // replace spaces with dashes

  return text;
}

module.exports = slugify;
