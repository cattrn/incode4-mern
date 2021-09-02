const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send(
    [
      "Welcome to our schedule website",
      "Great to have you here, check out the schedules!",
      "You're here! View your schedules above."
    ]
  )
})

module.exports = router