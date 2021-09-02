const express = require('express')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const User = require('../models/user')
const Schedule = require('../models/schedule')
const router = express.Router()

router.get('/', (req, res) => {
  User.find()
  .then(result => res.json(result))
  .catch(err => {
    console.log(err)
    res.status(400).json({
      "message": "Error getting all users from the database",
      err
    })
  })
})

router.post('/', (req, res) => {
  const {firstName, lastName, email, password} = req.body
  const cleanedEmail = email.toLowerCase().trim()
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  const newUser = new User({
    firstName,
    lastName,
    email: cleanedEmail,
    password: hash
  })

  newUser.save()
  .then(result => res.status(201).json({
    "message": "New user created in database",
    result
  }))
  .catch(err => res.status(400).json({
    "message": "Problem with creating new user",
    err
  }))
})
// #TODO: research whether there are better status codes for failed db insertion

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
  .then(result => res.json(result))
  .catch(err => {
    console.log(err)
    res.status(400).json({
      "message": "Error getting user from the database",
      err
    })
  })
})

router.get('/:id/schedules', (req, res) => {
  Schedule.find({user: req.params.id})
  .then(result => res.json(result))
  .catch(err => {
    console.log(err)
    res.status(400).json({
      "message": "Error getting schedules from the database",
      err
    })
  })
})

module.exports = router