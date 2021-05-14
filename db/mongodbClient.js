const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/local'


//mongoose.connect(DB_URL)
mongoose.connect(DB_URL, {
  useNewUrlParser: true
});

// connection db
mongoose.connection.on('connected',function() {
   console.log('Mongoose connection open to '+DB_URL);
});

// error on connection db
mongoose.connection.on('error',function(err) {
  console.log('Mongoose connection error: '+ err);
});

// disconnected db
mongoose.connection.on('disconnected',function() {
  console.log('Mongoose connection disconnected');
});

module.exports = mongoose