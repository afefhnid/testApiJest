// Link to your server file
const supertest = require('supertest');

const app = require('../../../src');

const request = supertest(app);

describe('Post Endpoints', () => {
  it('should return 201 on user creation', async done => {
    const user = {
      email: 'john.louis@gmail.com',
      password: 'p4ssw0rd',
      profileId: '1',
    };
    const response = await request.post('/api/users/create').send(user);

    expect(response.statusCode).toEqual(201);
    done();
  });
});
