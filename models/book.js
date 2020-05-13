const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;