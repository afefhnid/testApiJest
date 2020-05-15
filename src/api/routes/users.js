const Router = require('express-promise-router').default;

const usersController = require('../controllers/users');

// const dataPath = require('./users.json');
const router = Router();

router.get('/:id', usersController.getById);
router.get('/', usersController.get);
router.post('/create', usersController.create);
router.delete('/:id', usersController.delete);
router.get('/login', usersController.login);
router.post('/add', usersController.addUser);
router.put('/:id', usersController.updateUser);

module.exports = router;
