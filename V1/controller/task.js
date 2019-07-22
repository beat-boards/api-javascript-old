const Task = require('../model/Task')

exports.getTest = async (ctx) => {
    const tasks = await Task.find({})
    if (!tasks) {
        throw new Error("Error retriving API data")
    } else {
        ctx.body = tasks
    }
}