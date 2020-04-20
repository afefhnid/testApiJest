// Link to your server file
const supertest = require('supertest');

const app = require('../../../src');

const request = supertest(app);

describe('Post Endpoints', () => {
  it('gets the test endpoint', async done => {
    const response = await request.get('/api/users/');

    expect(response.statusCode).toEqual(200);
    // expect(response.body).toBeObject();
    // console.log(response.body);
    // expect(response.text).toBe('user');
    done();
  });
});
