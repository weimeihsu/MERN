const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recordSchema = new Schema({
    title: String,
    category: {
        type: String,
        required:true
    }
}, {timestamps: true})

module.exports = mongoose.model('recordSchema', recordSchema)
