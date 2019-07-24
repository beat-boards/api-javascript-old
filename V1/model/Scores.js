const mongoose = require('mongoose')

const Scores = mongoose.Schema({
    rawScore: Number,
    rawPercent: Number,
    activeModifiers: Array,
    adjustedScore: Number,
    rawrp: Number,
    actualrp: Number,
    date: Date,
    userID: String,
    maphash: String,
    userRating: Number
}, {collection: 'scores'})

module.exports = mongoose.model("Scores", Scores)
