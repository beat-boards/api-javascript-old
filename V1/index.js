const Koa = require('koa');
const Router = require('koa-router')
const logger = require('koa-logger')
const bodyparser = require('koa-bodyparser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const api = require('./controller/api')
const filter = require('@koa/json-filter')
const koaBody = require('koa-body')
const jwt = require('./middlewares/jwt')
const favicon = require('koa-favicon')

const app = new Koa()
app.use(koaBody())
app.use(logger())
app.use(filter())
app.use(favicon(__dirname + '/public/favicon.ico'))
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
router.get('/litemap', api.getLiteMaps)
router.get('/scores', api.getScores)
router.post('/scores', jwt.errorHandler(), jwt.jwt(), api.postScore)
router.post('/users', jwt.errorHandler(), jwt.jwt(), api.postUser)
router.post('/beatmap', jwt.errorHandler(), jwt.jwt(), api.postMap)
router.put('/scores/', jwt.errorHandler(), jwt.jwt(), api.putScore)
router.put('/users', jwt.errorHandler(), jwt.jwt(), api.putUser)
router.put('/beatmap', jwt.errorHandler(), jwt.jwt(), api.putMap)

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(`${process.env.PORT}`)