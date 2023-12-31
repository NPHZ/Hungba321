const mongoose = require('mongoose');
var BookSchema = mongoose.Schema({
    title: String,
    author: String,
    date: Date,
    price: Number,
    quantity: Number,
    image: String
});
var BookModel = mongoose.model("book", BookSchema, "book");

module.exports = BookModel;