const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recordSchema = new Schema({
    title: String,
    load: {
        type: Number,
        required:true
    }
}, {timestamps: true})

module.exports = mongoose.model('recordSchema', recordSchema)
