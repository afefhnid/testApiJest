const fs = require('fs');

const { User } = require('../db/models');

module.exports = {
  async addUser(userDetails) {
    const newUser = await User.create(userDetails);

    return newUser;
  },

  async login(login, password) {
    console.log(`login (${login} , ${password})`);
    if (login && password) {
      return true;
    }
  },

  async getUserById(userId) {
    const user = await User.findByPk(userId);

    return user;
  },
  async test(num) {
    return num;
  },
  async create(reqBody) {
    fs.readFile(`${__dirname}/users.json`, 'utf8', function(err, data) {
      const newUserId = Object.keys(JSON.parse(data)).length + 1;
      const dataNew = JSON.parse(data);
      const reqs = reqBody;
      reqs.id = newUserId;
      dataNew.push(reqs);
      fs.writeFile(`${__dirname}/users.json`, JSON.stringify(dataNew), function(err, result) {
        if (err) console.log('error', err);
      });
      return dataNew;
    });
  },
  async delete(id) {
    fs.readFile(`${__dirname}/users.json`, 'utf8', function(err, data) {
      const newUserId = Object.keys(JSON.parse(data)).length + 1;
      const dataNew = JSON.parse(data);
      console.log(id);
      delete dataNew[id];

      fs.writeFile(`${__dirname}/users.json`, JSON.stringify(dataNew), function(err, result) {
        if (err) console.log('error', err);
      });
    });
  },
};
