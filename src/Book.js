import React, { Component } from "react"
import AssignBook from './AssignBook'

class Book extends Component {
    render () {
        const { book, handleChange, books, index } = this.props
       let bookImage
        if (typeof(book.imageLinks)  !== 'undefined') {
         bookImage = book.imageLinks.smallThumbnail
            } else {
         bookImage = 'https://www.infomath-bib.de/tmp/pic/no_cover.gif'
        }
        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImage})` }}></div>
                    <AssignBook 
                        shelfLabel={book.shelf}
                        bookID={book.id}
                        handleChange={handleChange}
                        book={book}
                        books={books}
                        index={index}
                    />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book