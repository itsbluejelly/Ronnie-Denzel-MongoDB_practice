const eventLogger = require('../../middleware/eventLogger')
const BookModel = require('../../model/Book')

async function getController(req, res, next){
    eventLogger(req.path, req.method, 'eventLogs.txt')

    try{
        const savedBook = 
            await BookModel
                .findOne(req.body.find || null)
                .select(req.body.select || null)
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

module.exports = getController