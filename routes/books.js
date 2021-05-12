const router = require('koa-router')()

router.prefix('/books')

//test
router.get('/', function (ctx, next) {
  ctx.body = 'this is a test response!'
})


module.exports = router
