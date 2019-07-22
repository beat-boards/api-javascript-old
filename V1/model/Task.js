const mongoose = require('mongoose')

const Test = mongoose.Schema({
    epicness: { type: String, default: '0' }
}, {collection: 'test'})

module.exports = mongoose.model("Test", Test)