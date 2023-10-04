const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
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

const User = mongoose.model('User', userSchema)

module.exports = User