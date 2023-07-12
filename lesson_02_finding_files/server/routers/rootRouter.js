const express = require("express")
const rootController = require("../controllers/rootController")

const rootRouter = express.Router()

rootRouter.post("/", rootController)

module.exports = rootRouter