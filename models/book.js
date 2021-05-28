const mongoose = require('../db/mongodbClient')
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    description: String,
    author: String
  });
  
module.exports = mongoose.model('book', bookSchema);