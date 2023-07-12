const express = require("express")
const rootController = require("../controllers/rootController")

const rootRouter = express.Router()

rootRouter.route("/")
    .post(rootController.postController)
    .get(rootController.getController)

module.exports = rootRouter