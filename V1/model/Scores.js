const mongoose = require('mongoose')

const Scores = mongoose.Schema({
    rawScore: Number,
    rawPercent: Number,
    activeModifiers: Array,
    adjustedScore: Number,
    rawrp: Number,
    date: Date,
    userID: String,
    maphash: String 
}, {collection: 'scores'})

module.exports = mongoose.model("Scores", Scores)
