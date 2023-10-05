const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true,
    trim: true
  },

  team: {
    type: String,
    enum: ["CIA", "CSE", "MM"],
    default: "CIA"
  }
})

userSchema.pre('save', async function (next) {
  // Gen salt
  const salt = bcrypt.genSaltSync(10)
  const hashPss = bcrypt.hashSync(this.password, salt)

  this.password = hashPss
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User