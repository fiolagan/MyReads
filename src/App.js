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
    ],
    myShelfs: [
      {shelfName: 'Currently Reading', shelfCode: 'currentlyReading', shelfID: 1}, 
      {shelfName: 'Want to Read', shelfCode: 'wantToRead', shelfID: 2}, 
      {shelfName: 'Read', shelfCode: 'read', shelfID: 3},
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
    const { myShelfs } = this.state
    return (   
      <div className="app">
         <Route exact path='/search' render={() => (
          <Search 
          books={this.state.myBooks}
          handleChange={this.addToShelf}
          myShelfs={myShelfs}
          />
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">

            {myShelfs.map((shelf) => (
                <Shelf 
                shelfTitle={shelf.shelfName}
                shelfName={shelf.shelfCode}
                myShelfs={myShelfs}
                books={this.state.myBooks}
                handleChange={this.updateShelf}
                key={shelf.shelfID}
                />
            ))}
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
