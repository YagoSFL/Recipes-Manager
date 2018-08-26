const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const port = 4444
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(cors())

mongoose.connect('mongodb://localhost:27017/recipe', {useNewUrlParser: true})
require('../recipes/recipe')

server.listen(port, function() {
    console.log(`Server is running on port ${port}.`)
})

module.exports = server