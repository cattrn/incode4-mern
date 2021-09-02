const express = require('express')
const mongoose = require('mongoose')
const Schedule = require('../models/schedule')
const router = express.Router()

router.get('/', (req, res) => {
  Schedule.find()
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
  const newSchedule = new Schedule(req.body)

  newSchedule.save()
  .then(result => res.status(201).json({
    "message": "New schedule created in database",
    result
  }))
  .catch(err => res.status(400).json({
    "message": "Problem with creating new schedule",
    err
  }))
})
// #TODO: research whether there are better status codes for failed db insertion

module.exports = router