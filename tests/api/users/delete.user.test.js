const supertest = require('supertest');

const app = require('../../../src');

const request = supertest(app);

describe('Post Endpoints', () => {
  it('should return 200 on user delete', async done => {
    const id = 20;

    expect.assertions(1);
    const response = await request.delete(`/api/users/:${id}`);

    expect(response.statusCode).toEqual(200);
    done();
  });
  it('should return 404 on user delete', async done => {
    const id = 9665857;

    expect.assertions(1);
    const response = await request.delete(`/api/users/:${id}`);

    expect(response.statusCode).toEqual(404);
    done();
  });
});
