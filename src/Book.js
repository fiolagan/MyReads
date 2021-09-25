import React, { Component } from "react"
import AssignBook from './AssignBook'

class Book extends Component {
    render () {
        const { book, handleChange, books, index, myShelfs, displayBookDetails } = this.props
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
                    <div className="book-cover" style={{ width: 100, height: 151, backgroundImage: `url(${bookImage})` }} onClick={() => displayBookDetails(book, books)}>
                        <div className="open-pop-icon"></div>
                    </div>
                    <AssignBook 
                        shelfLabel={book.shelf}
                        bookID={book.id}
                        handleChange={handleChange}
                        book={book}
                        books={books}
                        index={index}
                        myShelfs={myShelfs}
                    />
                    </div>
                    <div className="book-title">{book.title}</div>
                    {book.authors !== undefined ? 
                    <div className="book-authors">{book.authors.join(", ")}</div>
                    : null}
                </div>
            </li>
        )
    }
}

export default Book