/* 
		restful api  是从URL的格式来表述的
    get     http://localhost:3000/books
    get     http://localhost:3000/books/book
    post    http://localhost:3000/books/book
    get     http://localhost:3000/books/book/1
    put     http://localhost:3000/books/book
    delete  http://localhost:3000/books/book/2 
 */
const express = require('express');
const service = require('./service.js');
const router =express.Router();
router.get('/books',service.allBooks);
router.post('/books/book',service.addBook);
router.get('/books/book/:id',service.getBookById);
router.put('/books/book',service.editBook);
router.delete('/books/book/:id',service.deleteBook);
module.exports =router;