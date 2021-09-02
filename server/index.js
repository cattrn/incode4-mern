const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const homeRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const schedulesRouter = require('./routes/schedules')

const app = express()
const PORT = process.env.PORT || 5000

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

// routes middleware
app.use('/api/v1', homeRouter)
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/schedules', schedulesRouter)


mongoose.connect(process.env.DB_URI)
.then(result => {
  console.log('Connected to mongodb')
  app.listen(PORT, () => console.log(`App is listening at http://localhost:${PORT}`))
})
.catch(err => {
  console.log(err)
})

