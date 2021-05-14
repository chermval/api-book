const ModelDb = require('../services/bookService')

class BooksController {
    /**
       * Get all books
        * @param {ctx} Koa Context
    */
    async findAll(ctx) {
        ctx.body = await ModelDb.findAll()
    }

}

module.exports = new BooksController()