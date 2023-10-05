const userController = require('../controllers/user.controller');
const { verifyToken } = require('../middleware/auth');


const routes = async (fastify, options) => {
  fastify.get('/', { preHandler: verifyToken }, userController.getAllUsers);
  fastify.get('/:id', userController.getUserById);
  fastify.post('/', userController.createUser);
  fastify.put('/:id', userController.updateUser);
  fastify.delete('/:id', userController.deleteUser);
  // login
  fastify.post('/login', userController.loginUser);
}

module.exports = routes