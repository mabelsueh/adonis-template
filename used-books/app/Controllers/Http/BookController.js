'use strict'

const booksDB = {

}
class BookController {
  index({view}) {
    return view.render('books/index')


  }
}

module.exports = BookController
