const BookModel = require('../models/book')

class BookServicedb {
    constructor () { }
  
    async findAll () {
        return new Promise((resolve, reject) => {
            BookModel.find({}, (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }
 
    async save (obj) {
        const book = new BookModel(obj)
        return new Promise((resolve, reject)=> {
            book.save((err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
                console.log(res)
            })
        }) 
    }

    async findById (id) {
        return new Promise((resolve, reject) => {
            BookModel.findById(id , (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }

    async deleteById (id) {
        return new Promise((resolve, reject) => {
            BookModel.findByIdAndDelete(id , (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }

    async updateById (id,obj) {

        return new Promise((resolve, reject) => {
            BookModel.findOneAndUpdate({_id: id}, obj, {new: true} , (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }
  
}

module.exports = new BookServicedb()