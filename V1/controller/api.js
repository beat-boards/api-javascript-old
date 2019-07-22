const Test = require('../model/Test')
const Users = require('../model/Users')
const Maps = require('../model/Maps')
const Scores = require('../model/Scores')

exports.getTest = async (ctx) => {
    ctx.set('Content-Type', 'application/json')

    const testing = await Test.find({})
    if (!testing) {
        throw new Error("Error retriving API data")
    } else {
        ctx.body = testing
    }
}

exports.getUsers = async (ctx) => {
    ctx.set('Content-Type', 'application/json')

    const data = await Users.find({})
    if (!data) {
        throw new Error("Error retriving API data")
    } else {
        ctx.body = data
    }
}

exports.getMaps = async (ctx) => {
    ctx.set('Content-Type', 'application/json')

    const data = await Maps.find({})
    if (!data) {
        throw new Error("Error retriving API data")
    } else {
        ctx.body = data
    }
}

exports.getScores = async (ctx) => {
    ctx.set('Content-Type', 'application/json')

    const data = await Scores.find({})
    if (!data) {
        throw new Error("Error retriving API data")
    } else {
        ctx.body = data
    }
}