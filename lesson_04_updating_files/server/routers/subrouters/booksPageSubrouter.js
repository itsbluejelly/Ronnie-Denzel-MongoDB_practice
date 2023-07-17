const express = require('express')
const booksPageSubcontroller = require('../../controllers/subcontrollers/booksPageSubcontroller')

const booksPageSubrouter = express.Router()

booksPageSubrouter.route("/book")
    .get(booksPageSubcontroller.getController)
    .delete(booksPageSubcontroller.deleteController)
    .put(booksPageSubcontroller.putController)

module.exports = booksPageSubrouter