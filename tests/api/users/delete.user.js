const supertest = require('supertest');

const app = require('../../../src');

const api = supertest(app);

module.exports = () => {
  it('should return 201 on user creation', async () => {
    const id = 1;

    await api
      .delete(`/api/:${id}`)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .expect(200);
  });
};
