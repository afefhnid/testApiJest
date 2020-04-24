const supertest = require('supertest');
const { expect } = require('chai');

const app = require('../../src');

const api = supertest(app);

/**module.exports = () => {
  
   * API /
   
  describe('API /', () => {
    it('gets the test endpoint', async done => {
      get();
    });
  });
  // eslint-disable-next-line global-require
  // describe('Get /api/login', require('/users/index.js'));
  // describe('Get /api/addUser', require('./add.user'));
};*/
