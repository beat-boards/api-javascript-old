const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const logger = require('koa-logger')
const bodyparser = require('koa-bodyparser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
const task = require('./controller/task')


dotenv.config()
app.use(logger())
app.use(router.routes())
app.use(bodyparser())

var mongoURL = `mongodb://${process.env.DBU}:${process.env.DBP}@${process.env.HOST}:${process.env.DBPORT}/${process.env.DBNAME}`

mongoose
    .connect(mongoURL, { useNewUrlParser: true })
    .catch(err => {
        console.log("Error connecting to database", err)
    })





var getdata = function *() {
    return yield Test.find
}

router.get('/test', task.getTest)

app.use(router.allowedMethods())

app.listen(`${process.env.PORT}`)