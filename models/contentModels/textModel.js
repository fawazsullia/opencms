const mongoose = require('mongoose')

const textSchema = new mongoose.Schema({

text : String

})

const TextModel = mongoose.model('TextModel', textSchema)

module.exports = TextModel