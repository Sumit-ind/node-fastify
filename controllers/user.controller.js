const User = require('../models/user.model')

const getAllUsers = async (req, reply) => {
  try {
    const users = await User.find({});

    reply.send({ success: true, data: users })
  } catch (error) {
    reply.code(400).send(error)
  }
}

const getUserById = async (req, reply) => {
  try {
    const { id } = req.params
    const user = await User.findById(id);

    reply.send(user)
  } catch (error) {
    reply.code(400).send(error)
  }
}

const createUser = async (req, reply) => {
  try {
    const { name, email } = req.body;
    const user = new User({ name: name, email: email })
    const newUser = await user.save()

    reply.send(newUser)
  } catch (error) {
    reply.code(400).send(error)
  }
}

const updateUser = async (req, reply) => {
  try {
    const { id } = req.params;
    const { name, team } = req.body;
    // Query
    // const existingUser = await User.findById(id);
    // if (!existingUser) {
    //   return reply.code(400).send("No user with requested id")
    // }
    const updatedUser = await User.findByIdAndUpdate(id, { name, team }, { new: true })

    reply.send(updatedUser)
  } catch (error) {
    reply.code(400).send(error)
  }
}

const deleteUser = async (req, reply) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);

    reply.code(204).send("Requested user removed")
  } catch (error) {
    reply.code(400).send(error)
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}