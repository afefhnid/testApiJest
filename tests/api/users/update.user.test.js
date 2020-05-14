const supertest = require('supertest');

const app = require('../../../src');

const request = supertest(app);

describe('Post Endpoints', () => {
  it('should return 200 on user update', async done => {
    const id = 9;
    const user = {
      email: 'update2',
      password: 'p4ssw0rd',
      profileId: '1',
      id: 9,
    };

    expect.assertions(1);
    const response = await request.put(`/api/users/:${id}`).send(user);

    expect(response.statusCode).toEqual(200);
    done();
  });
  it('should return 200 on user update', async done => {
    const id = 1000;
    const user = {
      email: 'update2',
      password: 'p4ssw0rd',
      profileId: '1',
      id: 1000,
    };

    expect.assertions(1);
    const response = await request.put(`/api/users/:${id}`).send(user);

    expect(response.statusCode).toEqual(401);
    done();
  });
});
