const ModelDb = require('../services/bookService')

class BooksController {
    /**
       * Get all books
        * @param {ctx} Koa Context
    */
    async findAll(ctx) {
        ctx.body = await ModelDb.findAll()
    }

    /**
       * Save book
        * @param {ctx} Koa Context
    */
     async save(ctx) {
        ctx.body = await ModelDb.save(ctx.request.body)
        ctx.status = 201
    }

}

module.exports = new BooksController()