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
    rating: Number
})

module.exports = mongoose.model('Book', BookSchema)