const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
    title: {
        type: String,
        required: [true, "You need to have a title for the book"]
    },
    author: {
        type: String,
        required: [true, "You need to have an author for the book"],
        minLength: [3, "The writer must have a minimum of 3 characters"]
    },
    pages: {
        type: Number,
        required: [true, "You need to have pages for the book"]
    },
    genres: [String],
    rating: Number,
    reviews:[
        {
            name:{
                type: String,
                required: [true, "You need to have a name for the reviewer"],
                minLength: [3, "The reviewer must have a minimum of 3 characters"]
            },
            body:{
                type: String,
                required: [true, "You need to have a message as a review"],
                minLength: [5, "A detailed review should have at least 5 characters"]
            }
        }
    ]
})

module.exports = mongoose.model('Book', BookSchema)