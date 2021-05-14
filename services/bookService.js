const BookModel = require('../models/book')

class BookServicedb {
    constructor () { }
  
    findAll () {
        return new Promise((resolve, reject) => {
            BookModel.find({}, (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }
 
    save (obj) {
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
  
}

module.exports = new BookServicedb()