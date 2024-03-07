const mongoose = require('mongoose');

const booksdataSchema = new mongoose.Schema({
bookname:String,
authorname:String,  
bookid:String,
status:Boolean,


})
booksdataSchema.index({'$**': 'text'});
module.exports = mongoose.model('books', booksdataSchema)