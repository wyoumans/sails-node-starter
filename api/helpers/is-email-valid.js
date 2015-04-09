'use strict';

/**
 * Returns true if the email is valid
 *
 * @param String email
 * @return Boolean
 */
function isEmailValid(email) {
  return /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/i.test(email);
}

module.exports = isEmailValid;
