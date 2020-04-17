const UserService = require('../../services/user');

// const dataPath = './data/users.json';
module.exports = {
  async login(req, res, next) {
    const { login } = req.query;
    const { password } = req.query;
    // const userDetails = req.body;
    // eslint-disable-next-line no-unused-vars
    const user = await UserService.login(login, password);

    res.send('ok');
    // return user;
  },

  async addUser(req, res, next) {
    const userDetails = req.body;

    const user = await UserService.addUser(userDetails);

    res.status(201).send(user);
    // return user;
  },
  // eslint-disable-next-line no-unused-vars
  async getUser(req, res, next) {
    const { id } = req.params;

    const user = await UserService.getUserById(id);

    return user;
  },
  async create(req, res) {
    const reqBody = req.body;
    const user = await UserService.create(reqBody);

    res.send(200);

    return user;
  },
  async delete(req, res) {
    const { id } = req.params;
    const user = await UserService.delete(id);

    res.send(200);

    return user;
  },
  async getById(req, res) {
    const { id } = req.params;
    const user = await UserService.getById(id);

    res.send(user);
    // res.send(user);
  },
  async get(req, res) {
    const user = await UserService.get();

    // res.send(user);
    res.send(user);
  },
};
