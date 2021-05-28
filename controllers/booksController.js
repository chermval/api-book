const Ajv = require('ajv/dist/jtd')
const ajv = new Ajv()

const ModelDb = require('../services/bookService')
const schemaBooks = require('../schemas/booksSchema')
const validateBooks = ajv.compile(schemaBooks)


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
        if (validateBooks(ctx.request.body)) {
            ctx.body = await ModelDb.save(ctx.request.body)
            ctx.status = 201
        } else {
            ctx.status = 422
        }
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
    
    /**
       * Update book by id
        * @param {ctx} Koa Context
    */
     async updateById(ctx) {
        if (validateBooks(ctx.request.body)) {
            ctx.body = await ModelDb.updateById(ctx.request.params.id, ctx.request.body)
            ctx.status = 200
        } else {
            ctx.status = 422
        }
    }

}

module.exports = new BooksController()