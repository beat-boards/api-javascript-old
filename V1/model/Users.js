const mongoose = require('mongoose')

const Users = mongoose.Schema({
    platform: String,
    platformID: String,
    rankpoints: Number,
    rank: Number,
    banned: Boolean,
    fails: Number,
    userData: {
        nickname: String,
        imageURL: String,
        countryCode: String
    }
}, {collection: 'users'})

module.exports = mongoose.model("Users", Users)
