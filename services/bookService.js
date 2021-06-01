const BookModel = require('../models/book')

class BookServicedb {
    constructor () { }
  
    async findAll () {
        return BookModel.find()
    }
 
    async save (obj) {
        const book = new BookModel(obj)
        return book.save()
    }

    async findById (id) {
        return BookModel.findById(id)
    }

    async deleteById (id) {
        return BookModel.findByIdAndDelete(id)
    }

    async updateById (id,obj) {
        return BookModel.findOneAndUpdate({_id: id}, obj, {new: true})
    }
  
}

module.exports = new BookServicedb()