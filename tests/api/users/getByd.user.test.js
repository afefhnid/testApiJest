const supertest = require('supertest');

const app = require('../../../src');

const request = supertest(app);

describe('Post Endpoints', () => {
  it('should return 200 on user delete', async () => {
    const id = 3;

    const response = await request.get(`/api/users/:${id}`);

    expect(response.status).toBe(200);
  });
});
