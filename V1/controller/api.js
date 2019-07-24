const Test = require('../model/Test')
const Users = require('../model/Users')
const Maps = require('../model/Maps')
const Scores = require('../model/Scores')
const jwt = require('../middlewares/jwt')

exports.getTest = async (ctx) => {
    ctx.set('Content-Type', 'application/json')

    var query = {}

    var value = ctx.request.query
    var parsed = JSON.parse(JSON.stringify(value))

    

    const testing = await Test.find(parsed).select(['-_id'])
    if (!testing) {
        throw new Error("Error retriving API data")
    } else {
        ctx.body = testing
    }
}

exports.getUsers = async (ctx) => {
    await rankUsersOperation()
    ctx.set('Content-Type', 'application/json')
    var value = ctx.request.query
    var parsed = JSON.parse(JSON.stringify(value))

    const data = await Users.find(parsed).select(['-_id', '-__v'])
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

    const data = await Maps.find(parsed).select(['-_id', '-__v'])
    if (!data) {
        throw new Error("Error retriving API data")
    } else {
        ctx.body = data
    }
}

exports.getLiteMaps = async (ctx) => {
    ctx.set('Content-Type', 'application/json')

    var value = ctx.request.query
    var parsed = JSON.parse(JSON.stringify(value))

    const data = await Maps.find(parsed).select(['-_id', '-coverimage', '-__v'])
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

    const data = await Scores.find(parsed).select(['-_id', '-__v'])
    if (!data) {
        throw new Error("Error retriving API data")
    } else {
        ctx.body = data
    }
}

exports.postScore = async (ctx) => {
    try {
        var scoremodel = new Scores(ctx.request.body)
        var result = await scoremodel.save()
        ctx.body = result
    } catch (error) {
        ctx.body = {"error":error}
    }
}

exports.postUser = async (ctx) => {
    try {
        var usermodel = new Users(ctx.request.body)
        var result = await usermodel.save()
        ctx.body = result
    } catch (error) {
        ctx.body = {"error":error}
    }
}

exports.postMap = async (ctx) => {
    try {
        var mapmodel = new Maps(ctx.request.body)
        var result = await mapmodel.save()
        ctx.body = result
    } catch (error) {
        ctx.body = {"error":error}
    }
}

exports.putScore = async (ctx) => {
    var model = await Scores.findOneAndUpdate(ctx.request.body.find, ctx.request.body.update, {"useFindAndModify":false})
    ctx.body = model
}

exports.putUser = async (ctx) => {
    var model = await Users.findOneAndUpdate(ctx.request.body.find, ctx.request.body.update, {"useFindAndModify":false})
    ctx.body = model
}

exports.putMap = async (ctx) => {
    var model = await Maps.findOneAndUpdate(ctx.request.body.find, ctx.request.body.update, {"useFindAndModify":false})
    ctx.body = model
}

async function rankUsersOperation() {
    var model = await Users.find({"rankpoints": { "$ne": 0}})

    model.sort(function (a, b) {
        return a.rankpoints < b.rankpoints
    })

    incrementRank = 1
    model.forEach(async function (element) {
        await Users.findOneAndUpdate({"platformID":element.platformID}, {"rank":incrementRank++}, {"useFindAndModify":false})
        
    })
}

let incrementRank