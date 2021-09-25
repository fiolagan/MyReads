import React, { Component } from "react"
import * as BooksAPI from './BooksAPI'
import { Link } from "react-router-dom"
import Book from './Book'

class Search extends Component {

updateQuery = (query) => {
  this.setState(() => ({
    query: query
  }))

  if (query.length > 0) {
  this.bookSearch(query)
  } else {
    this.setState(() => ({
      mySearch: []
    }))
  }
} 

bookSearch = (query) => {
  BooksAPI.search(query)
  .then((mySearch) => {
    mySearch.length > 0?
    this.setState(() => ({
      mySearch
    })):
    this.setState(() => ({
      mySearch: []
    }))
  })
}


state = {
      query: '',
      mySearch: []
    }

    render () {
      const { query } = this.state.query
      const { books, handleChange, myShelfs, displayBookDetails } = this.props
      const bookSearch = this.state.mySearch
        return (
          <div className="search-books">
            <div className="list-books-title">
            <Link
              to='/'
              ><div className="logo"></div>
              </Link>
                
              </div>
              <div className="search-books-bar">
              <Link
              className="close-search"
              to='/'
              >
              close
              </Link>
              
              <div className="search-books-input-wrapper">
                <input 
                type="text" 
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
                />
              </div>
            </div>

            <div className="search-books-results">
              <ol className="books-grid">      
                { bookSearch.length > 0
                ? bookSearch.map((book, index)=>
                <Book 
                    index={index}
                    book={book}
                    handleChange={handleChange}
                    key={book.id}
                    books={books}
                    myShelfs={myShelfs}
                    displayBookDetails={displayBookDetails}
                    />
                )
                : <div>No books showing for the search {this.state.query}</div>
                }
              </ol>          
            </div>
          </div>
        )
    }
}

export default Search