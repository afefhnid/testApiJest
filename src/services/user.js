/* eslint-disable func-names */
const fs = require('fs');

const { User } = require('../db/models');

const addJson = reqBody => {
  fs.readFile(`${__dirname}/users.json`, 'utf8', function(_err, data) {
    const newUserId = Object.keys(JSON.parse(data)).length + 1;
    const dataNew = JSON.parse(data);
    const reqs = reqBody;

    reqs.id = newUserId;
    dataNew.push(reqs);
    fs.writeFile(`${__dirname}/users.json`, JSON.stringify(dataNew), function(err) {
      // eslint-disable-next-line no-console
      if (err) console.log('error', err);

      return true;
    });
  });

  return true;
};

const findBy = id => {
  const data = fs.readFileSync(`${__dirname}/users.json`, 'utf8');
  const dataNew = JSON.parse(data);
  const user = dataNew.find(item => item.id == id);
  return user;
  /*fs.readFile(`${__dirname}/users.json`, 'utf8', async function(err, data) {
    const dataNew = await JSON.parse(data);
    const user = await dataNew.find(item => item.id == id);

    return user;
  });*/
};

module.exports = {
  async addUser(userDetails) {
    const newUser = await User.create(userDetails);

    return newUser;
  },

  // eslint-disable-next-line consistent-return
  async login(login, password) {
    if (login && password) {
      return true;
    }
  },

  async getUserById(userId) {
    const user = await User.findByPk(userId);

    return user;
  },

  async create(reqBody) {
    return addJson(reqBody);
  },
  async delete(id) {
    fs.readFile(`${__dirname}/users.json`, 'utf8', function(err, data) {
      const newUserId = Object.keys(JSON.parse(data)).length + 1;
      const dataNew = JSON.parse(data);

      delete dataNew[id];

      fs.writeFile(`${__dirname}/users.json`, JSON.stringify(dataNew), function(err, result) {
        // eslint-disable-next-line no-console
        if (err) console.log('error', err);
      });
    });
  },
  async get() {
    const data = fs.readFileSync(`${__dirname}/users.json`, 'utf8');
    const dataNew = JSON.parse(data);
    return dataNew;
  },
  async getById(id) {
    const user = await findBy(id);

    return user;
  },
};
