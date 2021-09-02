const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const userSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
})

const User = mongoose.model("User", userSchema)

module.exports = User


// #READ: https://mongoosejs.com/docs/validation.html#the-unique-option-is-not-a-validator