const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthorSchema = new Schema({
    name:{
        type: String,
        required: [true, "You need to have a name for the author"],
        minLength: [3, "The name must have a minimum of 3 characters"]
    },
    age: Number
})

module.exports = mongoose.model('Author', AuthorSchema)