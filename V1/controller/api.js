const Test = require('../model/Test')
const Users = require('../model/Users')
const Maps = require('../model/Maps')
const Scores = require('../model/Scores')

exports.getTest = async (ctx) => {
    ctx.set('Content-Type', 'application/json')

    var query = {}

    var value = ctx.request.query
    var parsed = JSON.parse(JSON.stringify(value))

    

    const testing = await Test.find(parsed)
    if (!testing) {
        throw new Error("Error retriving API data")
    } else {
        ctx.body = testing
    }
}

exports.getUsers = async (ctx) => {
    ctx.set('Content-Type', 'application/json')

    var value = ctx.request.query
    var parsed = JSON.parse(JSON.stringify(value))

    const data = await Users.find(parsed)
    if (!data) {
        throw new Error("Error retriving API data")
    } else {
        ctx.body = data
    }
}

exports.getMaps = async (ctx) => {
    ctx.set('Content-Type', 'application/json')

    var value = ctx.request.query
    var parsed = JSON.parse(JSON.stringify(value))

    const data = await Maps.find(parsed)
    if (!data) {
        throw new Error("Error retriving API data")
    } else {
        ctx.body = data
    }
}

exports.getScores = async (ctx) => {
    ctx.set('Content-Type', 'application/json')

    var value = ctx.request.query
    var parsed = JSON.parse(JSON.stringify(value))

    const data = await Scores.find(parsed)
    if (!data) {
        throw new Error("Error retriving API data")
    } else {
        ctx.body = data
    }
}