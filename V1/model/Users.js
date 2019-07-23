const mongoose = require('mongoose')

const Users = mongoose.Schema({
    storeType: String,
    userID: String,
    rankpoints: Number,
    rank: Number,
    banned: Boolean,
    fails: Number
}, {collection: 'users'})

module.exports = mongoose.model("Users", Users)
