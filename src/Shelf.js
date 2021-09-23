import React, { Component } from "react"

import Book from './Book'

class Shelf extends Component {
    render () {
        const { shelfTitle, books, shelfName, handleChange, myShelfs } = this.props
        return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">{shelfTitle}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                {books.map((book, index) => (
                book.shelf === shelfName?
                  <Book 
                  index={index}
                  book={book}
                  handleChange={handleChange}
                  key={book.id}
                  books={books}
                  myShelfs={myShelfs}
                  />
                  :
                  null
                  ))}

                </ol>
              </div>
            </div>
        )
    }
}

export default Shelf