import React, { Component } from "react"
import AssignBook from './AssignBook'

class Shelf extends Component {
    render () {
        const { shelfTitle, books, shelfName, handleChange } = this.props
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">

                    {books.map((book, index) => (
                    book.shelf === shelfName?
                    
                      <li key={index}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                            <AssignBook 
                                shelfLabel={book.shelf}
                                bookID={index}
                                handleChange={handleChange}
                                book={book}
                            />
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors.join(" and ")}</div>
                        </div>
                      </li>:
                      null
                      ))}
                    </ol>
                  </div>
                </div>
        )
    }
}

export default Shelf