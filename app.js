const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')

dotenv.config({path: './config/.env'})

const app = express()

app.use((req, res, next) => {
  res.json({title: 'hello world'})
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`.cyan.bold);
})