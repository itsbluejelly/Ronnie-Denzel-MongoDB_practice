const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const eventLogger = require('./middleware/eventLogger')
const connectDB = require('./config/connectDB')
const booksPageRouter = require('./routers/booksPageRouter')
const authorsPageRouter = require('./routers/authorsPageRouter')

const app = express()
dotenv.config()
connectDB()

const port = process.env.PORT_NUMBER || 5500

app.use(express.json())

app.use("/", booksPageRouter, authorsPageRouter)

mongoose.connection.once('open', () => {
    app.listen(port, () => eventLogger("Connected to MongoDB", `Server listening on port ${port}`, 'databaseLogs.txt'))
})