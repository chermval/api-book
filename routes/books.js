const router = require('koa-router')()
const BookController = require('../controllers/booksController')

router.prefix('/api/v1/books')

//Get all books 
router.get('/', BookController.findAll)
//Save books
router.post('/', BookController.save)
//Get books by id
router.get('/:id', BookController.findById)
//Delete book by id
router.delete('/:id', BookController.deleteById)
//Update book by id
router.put('/:id', BookController.updateById)

module.exports = router
