const router = require('koa-router')()
const BookController = require('../controllers/booksController')

router.prefix('/api/v1/books')

//Get all Books 
router.get('/', BookController.findAll)
router.post('/', BookController.save)
module.exports = router
