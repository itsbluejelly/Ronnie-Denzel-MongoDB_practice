const express = require('express')
const booksPageSubcontroller = require('../../controllers/subcontrollers/booksPageSubcontroller')

const booksPageSubrouter = express.Router()

booksPageSubrouter.get("/book", booksPageSubcontroller)

module.exports = booksPageSubrouter