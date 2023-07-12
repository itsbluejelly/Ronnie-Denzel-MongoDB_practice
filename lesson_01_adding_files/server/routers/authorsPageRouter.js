const express = require('express')
const authorsPageController = require('../controllers/authorsPageController')

const authorsPageRouter = express.Router()

authorsPageRouter.post("/authors", authorsPageController)

module.exports = authorsPageRouter