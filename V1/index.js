const Koa = require('koa');
const Router = require('koa-router')
const logger = require('koa-logger')
const bodyparser = require('koa-bodyparser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const api = require('./controller/api')
const filter = require('@koa/json-filter')
const app = new Koa()
const router = new Router()

dotenv.config()

var mongoURL = `mongodb://${process.env.DBU}:${process.env.DBP}@${process.env.HOST}:${process.env.DBPORT}/${process.env.DBNAME}`

mongoose
    .connect(mongoURL, { useNewUrlParser: true })
    .catch(err => {
        console.log("Error connecting to database", err)
    })

router.get('/test', api.getTest)
router.get('/users', api.getUsers)
router.get('/beatmap', api.getMaps)
router.get('/scores', api.getScores)

app.use(logger())
app.use(filter())
app.use(router.routes())
app.use(bodyparser())
app.use(router.allowedMethods())

app.listen(`${process.env.PORT}`)