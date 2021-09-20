import React from 'react'
import { Link } from "react-router-dom"
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Shelf from './Shelf'

class BooksApp extends React.Component {

  componentDidMount() {
    BooksAPI.getAll()
      .then((myBooks) => {
        this.setState(() => ({
          myBooks
        }))
      })
  }

  state = {
    myBooks: [
    ]
  }

  

  removeBook = (book) => {
    let confirmDelete = window.confirm('Are you sure you want to remove ' + book.title + ' by ' + book.author + '?')
    if (confirmDelete) {
    this.setState((currentState) => ({
      myBooks: currentState.myBooks.filter((c) => {
        return c.title !== book.title
      })
    }))
  }
  else {

  }

  }
 

  updateShelf = (bookID, shelfSelect, book) => {
    if (shelfSelect === 'none'){
      this.removeBook(book)
      
      console.log(this)
    } else {
    let myBooks = [...this.state.myBooks];
    myBooks[bookID].shelf = shelfSelect;
    this.setState({myBooks});
  }}

  render() {
    console.log(this.state.myBooks)
    return (
      
      <div className="app">
        
         <Route exact path='/search' render={() => (
          <Search />
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <Shelf 
                shelfTitle="Currently Reading"
                shelfName="currentlyReading"
                books={this.state.myBooks}
                handleChange={this.updateShelf}
                />

                <Shelf 
                shelfTitle="Want to Read"
                shelfName="wantToRead"
                books={this.state.myBooks}
                handleChange={this.updateShelf}
                />

                <Shelf 
                shelfTitle="Read"
                shelfName="read"
                books={this.state.myBooks}
                handleChange={this.updateShelf}
                />

<Shelf 
                shelfTitle="None"
                shelfName="undefined"
                books={this.state.myBooks}
                handleChange={this.updateShelf}
                />
            </div>
            <div className="open-search">
              <Link
              to='/search'
              >
              <button>Add a book</button>
              </Link>
            </div>
          </div>
        )} />

      </div>
    )
  }
}

export default BooksApp
