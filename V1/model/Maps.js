const mongoose = require('mongoose')

const Maps = mongoose.Schema({
    maphash: String,
    levelhash: String,
    difficulty: String,
    coverimage: String,
    songName: String,
    songSubName: String,
    songAuthorName: String,
    levelAuthorName: String,
    bpm: Number,
    noteCount: Number,
    scoreCount: Number,
    maxRP: Number,
    maxScore: Number
}, {collection: 'maps'})

module.exports = mongoose.model("Maps", Maps)
