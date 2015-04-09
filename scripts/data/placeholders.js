'use strict';

var sampleDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius non purus at elementum. ' +
                        'Donec luctus urna vel nisl mattis, in convallis mauris pulvinar. Maecenas eleifend viverra ' +
                        'aliquet. Ut ultrices leo eu lectus dapibus posuere. Phasellus vel quam a nunc convallis congue ' +
                        'quis ut augue. Fusce at erat convallis.';

var clubs = [{
  name: 'Club A',
  school: 'Boston College',
  description: sampleDescription,
  isFeatured: true,
  isActive: true
}, {
  name: 'Club B',
  school: 'Harvard University',
  description: sampleDescription,
  isFeatured: true,
  isActive: true
}, {
  name: 'Club C',
  school: 'Northwestern University',
  description: sampleDescription,
  isFeatured: false,
  isActive: true
}, {
  name: 'Club D',
  school: 'MIT',
  description: sampleDescription,
  isFeatured: true,
  isActive: true
}];

var companies = [{
  name: 'Apple',
  url: 'http://www.apple.com/',
  description: sampleDescription,
  isFeatured: true,
  isActive: true
}, {
  name: 'Amazon',
  url: 'http://www.amazon.com/',
  isFeatured: true,
  isActive: true
}, {
  name: 'William Youmans LLC',
  url: 'http://www.williamyoumans.com',
  description: sampleDescription,
  isFeatured: false,
  isActive: true
}, {
  name: 'Google',
  url: 'http://www.google.com',
  description: sampleDescription,
  isFeatured: true,
  isActive: true
}];

var users = [{
  firstName: 'William',
  lastName: 'Youmans',
  email: 'will@williamyoumans.com',
  isAdmin: true,
  password: 'administrator'
}, {
  firstName: 'Maurice',
  lastName: 'Minnifield',
  email: 'test1@gmail.com',
  password: 'user'
}, {
  firstName: 'Maggie',
  lastName: 'O\'Connell',
  email: 'test2@gmail.com',
  password: 'user'
}, {
  firstName: 'Holling',
  lastName: 'Vincoeur',
  email: 'test3@gmail.com',
  password: 'user'
}, {
  firstName: 'Ed',
  lastName: 'Chigliak',
  email: 'test4@gmail.com',
  password: 'user'
}, {
  firstName: 'Chris',
  lastName: 'Stevens',
  email: 'test5@gmail.com',
  password: 'user'
}, {
  firstName: 'Shelly',
  lastName: 'Tambo',
  email: 'test6@gmail.com',
  password: 'user'
}, {
  firstName: 'Marilyn',
  lastName: 'Whirlwind',
  email: 'test7@gmail.com',
  password: 'user'
}, {
  firstName: 'Ruth-Anne',
  lastName: 'Miller',
  email: 'test8@gmail.com',
  password: 'user'
}, {
  firstName: 'Joel',
  lastName: 'Fleischman',
  email: 'test9@gmail.com',
  password: 'user'
}];

module.exports = {companies: companies, clubs: clubs, users: users};
