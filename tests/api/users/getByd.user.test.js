const supertest = require('supertest');

const app = require('../../../src');

const request = supertest(app);

describe('Post Endpoints', () => {
  it('should return 200 on user getById', async done => {
    const id = 1;

    const response = await request.get(`/api/users/:${id}`);

    expect(response.statusCode).toEqual(200);
    done();
  });
});
