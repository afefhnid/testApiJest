// Link to your server file
const supertest = require('supertest');

const app = require('../../../src');

const request = supertest(app);

describe('Post Endpoints', () => {
  it('should return 201 on user creation', async done => {
    request(app);
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

/* const supertest = require('supertest');

const app = require('../../../src');

const api = supertest(app);

module.exports = () => {
  it('should return 201 on user creation', async () => {
    const user = {
      email: 'john.louis@gmail.com',
      password: 'p4ssw0rd',
      profileId: '1',
    };

    await api
      .post('/api/users/add')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send(user)
      .expect(201);
  });
  it('should return 201 on user creation', async () => {
    const user = {
      email: 'john.louis@gmail.com',
      password: 'p4ssw0rd',
      profileId: '1',
    };

    await api
      .post('/api/users/create')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send(user)
      .expect(200);
  });
}; */
