const eventLogger = require('../middleware/eventLogger')
const AuthorModel = require('../model/Author')

async function postController(req, res, next){
    eventLogger(req.path, req.method, 'eventLogs.txt')

    try{
        const author = await AuthorModel.create(req.body)
        res.status(201).send("Post was successful")
        eventLogger("Post to authors collection was successful", author, 'databaseLogs.txt')
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

module.exports = postController