const supertest = require('supertest');

const app = require('../../../src');

const request = supertest(app);

describe('Post Endpoints', () => {
  it('should return 200 on user delete', async done => {
    const id = 85;
    const response = await request.delete(`/api/users/:${id}`);

    expect(response.statusCode).toEqual(200);
    done();
  });
});
