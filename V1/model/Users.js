const mongoose = require('mongoose')

const Users = mongoose.Schema({
    platform: String,
    platformID: String,
    rankpoints: Number,
    rank: Number,
    banned: Boolean,
    fails: Number,
    role: String,
    userData: {
        nickname: String,
        image: String,
        countryCode: String
    },
    following: Array
}, {collection: 'users'})

module.exports = mongoose.model("Users", Users)
