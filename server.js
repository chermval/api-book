const Koa = require('koa')
const Router = require('koa-router')
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const healthcheck = require('koa-simple-healthcheck')

const app = new Koa()
const router = new Router()


// middlewares
// config
require('dotenv').config({
  path: './config/.env'
})

app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(cors())
app.use(logger())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// api healthcheck
app.use(healthcheck({
    path: '/api/v1/healthcheck',
    healthy: function () {
      return { everything: 'is ok'}
    }
  })
)

app.use(router.routes())
app.use(router.allowedMethods())

const books = require('./routes/books')
app.use(books.routes(), books.allowedMethods())


app.listen(3000)

module.exports = app
