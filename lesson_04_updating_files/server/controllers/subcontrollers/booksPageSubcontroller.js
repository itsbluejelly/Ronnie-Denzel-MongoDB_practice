const eventLogger = require('../../middleware/eventLogger')
const BookModel = require('../../model/Book')

async function getController(req, res, next){
    eventLogger(req.path, req.method, 'eventLogs.txt')

    try{
        const savedBook = 
            await BookModel
                .findOne(req.body.actions.find ? req.body.actions.find  : null)
                .select(req.body.actions.select ? req.body.actions.select :  null)
        res.status(200).json(savedBook)
        eventLogger("Obtaining one saved book from collection successful", savedBook, 'databaseLogs.txt')
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
        const deletedBook = 
            await BookModel
                .findOneAndDelete(req.body.actions.find ? req.body.actions.find : null)
                .select(req.body.actions.select ? req.body.actions.select : null)
        
        res.status(200).send("Document deleted")
        eventLogger("Deletion of document from books collection successful", deletedBook, 'databaseLogs.txt')
    }catch(error){
        res.status(400).json({error : {[error.name] : error.message}})
        eventLogger(error.name, error.message, 'errorLogs.txt')
    }

    next()
}

module.exports = {
    getController,
    deleteController
}