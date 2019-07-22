const mongoose = require('mongoose')

const Maps = mongoose.Schema({}, {collection: 'maps'})

module.exports = mongoose.model("Maps", Maps)
