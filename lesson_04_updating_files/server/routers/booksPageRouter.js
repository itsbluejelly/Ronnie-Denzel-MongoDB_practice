const express = require("express")
const booksPageController = require("../controllers/booksPageController")
const booksPageSubrouter = require('./subrouters/booksPageSubrouter')

const booksPageRouter = express.Router()

booksPageRouter.route("/books")
    .post(booksPageController.postController)
    .get(booksPageController.getController)
    .delete(booksPageController.deleteController)
    .put(booksPageController.putController)

booksPageRouter.use("/books", booksPageSubrouter)

module.exports = booksPageRouter