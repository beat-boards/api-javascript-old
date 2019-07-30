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
const cors = require('@koa/cors')

const app = new Koa()
app.use(koaBody())
app.use(logger())
app.use(filter())
app.use(cors())
app.use(favicon(__dirname + '/public/favicon.ico'))
const router = new Router()


dotenv.config()

var mongoURL = `mongodb://${process.env.DBU}:${process.env.DBP}@${process.env.HOST}:${process.env.DBPORT}/${process.env.DBNAME}`

mongoose
.connect(mongoURL, { useNewUrlParser: true })
.catch(err => {
    console.log("Error connecting to database", err)
})

router.get('/api/test', api.getTest)
router.get('/api/users', api.getUsers)
router.get('/api/beatmap', api.getMaps)
router.get('/api/litemap', api.getLiteMaps)
router.get('/api/scores', api.getScores)
router.post('/api/scores', jwt.errorHandler(), jwt.jwt(), api.postScore)
router.post('/api/users', jwt.errorHandler(), jwt.jwt(), api.postUser)
router.post('/api/beatmap', jwt.errorHandler(), jwt.jwt(), api.postMap)
router.put('/api/scores/', jwt.errorHandler(), jwt.jwt(), api.putScore)
router.put('/api/users', jwt.errorHandler(), jwt.jwt(), api.putUser)
router.put('/api/beatmap', jwt.errorHandler(), jwt.jwt(), api.putMap)

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(`${process.env.PORT}`)