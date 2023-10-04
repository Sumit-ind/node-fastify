const userController = require('../controllers/user.controller')


const routes = async (fastify, options) => {
  fastify.get('/', userController.getAllUsers);
  fastify.get('/:id', userController.getUserById);
  fastify.post('/', userController.createUser);
  fastify.put('/:id', userController.updateUser);
  fastify.delete('/:id', userController.deleteUser);
}

module.exports = routes