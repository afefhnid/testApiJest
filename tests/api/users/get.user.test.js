// Link to your server file
const supertest = require('supertest');

const app = require('../../../src');

const request = supertest(app);

describe('Post Endpoints', () => {
  it('gets the test endpoint', async done => {
    const response = await request.get('/api/users/');
    expect(response.status).toBe(200);
    // expect(response.body.message).toBe('pass!');
    done();
  });
});
