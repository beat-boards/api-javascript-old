const mongoose = require('mongoose')

const Scores = mongoose.Schema({}, {collection: 'scores'})

module.exports = mongoose.model("Scores", Scores)
