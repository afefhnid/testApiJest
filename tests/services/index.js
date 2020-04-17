const supertest = require('supertest');
const { expect } = require('chai');

const app = require('../../src');

const api = supertest(app);

module.exports = () => {
  /**
   * API /
   */
  describe('services /', () => {
    // ...
  });

  /**
   * API /users
   */
  //describe('API /services');
};
