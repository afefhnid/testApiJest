/* eslint-disable promise/always-return */
/* eslint-disable func-names */
const fs = require('fs');

const UserService = require('../../src/services/user');

describe('create', function() {
  // test get function
  it('test function get', function() {
    const result = UserService.get();

    expect(typeof result).toBe('object');
  });

  // test create function
  it('test function create', async function() {
    const user = {
      name: 'Chance favors only those who know how to court her.',
      password: 'Charles Nicolle',
      profession: '10',
    };

    // UserService.create(user => {});
    //expect(mockUtilFunction.mock.calls.length).toBe(1);
    // expect(UserService.create()).toHaveBeenCalledWith(expect.any(Object));
    /* return result.then(function(data) {
      expect(data).toBe(true);
    }); */
  });
  // test getById function
  it('test function getById', function() {
    const result = UserService.getById();

    // expect(UserService.getById()).toHaveBeenCalledWith(expect.any(String));
    expect(typeof result).toBe('object');
  });
  // test delete function
  it('test function delete', function() {
    const result = UserService.delete();

    expect(typeof result).toBe('object');
  });
});
