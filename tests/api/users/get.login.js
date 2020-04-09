const supertest = require('supertest');

const app = require('../../../src');

const api = supertest(app);
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
chai.use(chaiHttp);
module.exports = () => {
  describe('/api/login', function() {
    it('user login', done => {
      chai
        .request(app)
        .get('/api/login')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('False');
          done(err);
        });
    });
  });
  describe('get /api/login/:login/:password', function() {
    it('user login args', done => {
      const login = 'Afef';
      const password = '1234';
      chai
        .request(app)
        .get(`/api/login?login=${login}&password=${password}`)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('ok');
          done();
        });
    });
  });

  describe('/api/users/login', function() {
    it('user login', done => {
      chai
        .request(app)
        .get('/api/users/login')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('ok');
          done(err);
        });
    });
  });
};
