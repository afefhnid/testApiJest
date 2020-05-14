/* eslint-disable func-names */
const { promisify } = require('util');
const fs = require('fs');

const readFileAsync = promisify(fs.readFile);

const { User } = require('../db/models');

const addJson = reqBody => {
  fs.readFile(`${__dirname}/users.json`, 'utf8', function(_err, data) {
    const usersArray = JSON.parse(data);

    usersArray.sort((userA, userB) => userB.id - userA.id);
    const dataNew = JSON.parse(data);
    const reqs = reqBody;

    reqs.id = usersArray[0].id + 1;
    dataNew.push(reqs);
    fs.writeFile(`${__dirname}/users.json`, JSON.stringify(dataNew), function(err) {
      // eslint-disable-next-line no-console
      if (err) console.log('error', err);

      return true;
    });
  });

  return true;
};
const update = (id, reqBody) => {
  var id = id.match(/\d+/)[0];
  let result = false;
  id = parseInt(id);
  if (id) {
    const data = fs.readFileSync(`${__dirname}/users.json`);
    const usersArray = JSON.parse(data);

    usersArray.map((obj, i) => {
      if (obj.id === reqBody.id) {
        usersArray[i] = reqBody;
        result = true;
      }
    });

    fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(usersArray, null, 2));
  }
  return result;
};

const findBy = id => {
  const data = fs.readFileSync(`${__dirname}/users.json`, 'utf8');
  const dataNew = JSON.parse(data);
  const user = dataNew.find(item => item.id == id);

  return user;
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
  async updateUser(id, reqBody) {
    return update(id, reqBody);
  },
  async delete(id) {
    var id = await id.match(/\d+/)[0];

    id = parseInt(id);
    if (id) {
      const data = fs.readFileSync(`${__dirname}/users.json`);
      const obj = JSON.parse(data);
      const json = obj.filter(user => {
        return user.id !== id;
      });

      fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(json, null, 2));
    }
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
