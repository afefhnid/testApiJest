const Auth = require('../../src/services/basic-auth');

describe('Basic Auth Tests', () => {
  it('Should call next() if authentication success', async () => {
    const authentication = ['afefhnid@gmail.com', '!Afef'];
    expect.assertions(1);
    return await Auth.digestAuth(authentication).then(data => expect(data).toEqual(true));

    // expect(res).toEqual('true');
    // expect(response.sendStatus).toBeCalledWith(200);
  });

  it('Should send status 401 if authentication fails', async () => {
    const authentication = ['afefhnid@gmail.com', '!fef'];
    expect.assertions(1);
    return await Auth.digestAuth(authentication).then(data => expect(data).toEqual(false));
  });
});
