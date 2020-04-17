const supertest = require('supertest');

const app = require('../../../src');

const api = supertest(app);
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
chai.use(chaiHttp);
module.exports = () => {
  describe('POST /add', function() {
    it('saves a new task', function(done) {
      request
        .post('/api/add')
        .send({
          name: 'afef',
          done: false,
        })
        .expect(201)
        .end(function(err) {
          done(err);
        });
    });
  });
};
