const mongoose = require('mongoose')

const Users = mongoose.Schema({}, {collection: 'users'})

module.exports = mongoose.model("Users", Users)
