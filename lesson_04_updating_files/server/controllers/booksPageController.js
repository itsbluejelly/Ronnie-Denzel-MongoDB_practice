const eventLogger = require('../middleware/eventLogger')
const BookModel = require('../model/Book')

async function postController(req, res, next){
    eventLogger(req.path, req.method, 'eventLogs.txt')

    try{
        const book = await BookModel.create(req.body)
        res.status(201).send("Post was successful")
        eventLogger("Post to books collection was successful", book, 'databaseLogs.txt')
    }catch(error){
        res.status(400).json({
            error: {
                [error.name]: error.message
            }
        })

        eventLogger(error.name, error.message, 'errorLogs.txt')
    }

    next()
}

async function getController(req, res, next){
    eventLogger(req.path, req.method, 'eventLogs.txt')

    try{
        const savedBooks = 
            await BookModel
                .find(req.body.actions.find ? req.body.actions.find : null)
                .select(req.body.actions.select ? req.body.actions.select : null)
                .limit(req.body.actions.limit ? req.body.actions.limit : null)
                .sort(req.body.actions.sort ? req.body.actions.sort : null)
        res.status(200).json(savedBooks)
        eventLogger("Obtaining saved books from collection successful", savedBooks, 'databaseLogs.txt')
    }catch(error){
        res.status(404).json({
            error: {
                [error.name]: error.message
            }
        })

        eventLogger(error.name, error.message, 'errorLogs.txt')
    }

    next()
}

async function deleteController(req, res, next){
    eventLogger(req.path, req.method, 'eventLogs.txt')

    try{
        const deletedBooks = await BookModel.deleteMany(req.body.actions.find ? req.body.actions.find : null)
        res.status(200).send(`${deletedBooks.deletedCount} documents deleted`)
        eventLogger("Deleting books from collection successful", `${deletedBooks.deletedCount} books deleted`, 'databaseLogs.txt')
    }catch(error){
        res.status(400).json({
            error: {
                [error.name]: error.message
            }
        })

        eventLogger(error.name, error.message, 'errorLogs.txt')
    }

    next()
}

module.exports = {
    postController,
    getController,
    deleteController
}