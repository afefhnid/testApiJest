const supertest = require('supertest');
const { expect } = require('chai');

const app = require('../../src');

const api = supertest(app);

module.exports = () => {
  /**
   * API /
   */
  describe('API /', () => {
    // ...
  });

  /**
   * API /users
   */
  describe('API /users', require('./users'));
};
