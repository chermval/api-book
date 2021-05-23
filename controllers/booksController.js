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

    /**
       * Get book by id
        * @param {ctx} Koa Context
    */
     async findById(ctx) {
        ctx.body = await ModelDb.findById(ctx.request.params.id)
        ctx.status = 200
    }
    
    /**
       * Delete book by id
        * @param {ctx} Koa Context
    */
     async deleteById(ctx) {
        ctx.body = await ModelDb.deleteById(ctx.request.params.id)
        ctx.status = 200
    }

}

module.exports = new BooksController()