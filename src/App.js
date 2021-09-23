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

  removeFromShelf = (book) => {
    this.setState((currentState) => ({
      myBooks: currentState.myBooks.filter((c) => {
        return c.id !== book.id
      })
    }))
  }
 
  updateShelf = (book, shelfSelect) => {
    let myBooks = [...this.state.myBooks];
    
      function getIndex(id) {
        return myBooks.findIndex(obj => obj.id === id);
      }
      let bookIndex = getIndex(book.id)
      myBooks[bookIndex].shelf = shelfSelect;
      this.setState({myBooks});

    BooksAPI.update(book, shelfSelect)
    if (shelfSelect === 'null') {
      this.removeFromShelf(book)
    } 
  }

  

  addToShelf = (book, shelfSelect) => {
    this.removeFromShelf(book)

    if (shelfSelect !== 'null') {
    BooksAPI.update(book, shelfSelect)
    .then(() => {
      let myBook = book;
      myBook["shelf"] = shelfSelect;
      this.setState((currentState) => ({
        myBooks: currentState.myBooks.concat([myBook])
      }))
    })  
    } 
}

  


  render() {
    return (   
      <div className="app">
        
         <Route exact path='/search' render={() => (
          <Search 
          books={this.state.myBooks}
          handleChange={this.addToShelf}
          />
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
