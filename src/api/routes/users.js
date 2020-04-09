const Router = require('express-promise-router').default;
const fs = require('fs');

const usersController = require('../controllers/users');
const { celebrate, id } = require('../middlewares/validation');
// const dataPath = require('./users.json');
const router = Router();

/**
 * GET /users/:id
 */
router.get(
  '/get/:id',
  celebrate({
    params: {
      id: id.required().error(() => 'User ID is required and must be a positive integer.'),
    },
  }),
  usersController.getUser
);

router.get('/', (req, res) => {
  fs.readFile(`${__dirname}/users.json`, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
});

router.post('/create', usersController.create);
router.delete('/:id', usersController.delete);
router.get('/login', usersController.login);
router.post('/add', usersController.addUser);
// router.get('/test', (req, res) => res.sendStatus(200));
module.exports = router;
