import React from 'react'
import { Link } from "react-router-dom"
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Shelf from './Shelf'
import ExtendedInfo from './ExtendedInfo'

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
      {shelfName: 'Currently Reading', shelfCode: 'currentlyReading'}, 
      {shelfName: 'Want to Read', shelfCode: 'wantToRead'}, 
      {shelfName: 'Read', shelfCode: 'read'},
    ],
    extendedInfo: []
  }

  removeFromShelf = (book) => {
    this.setState((currentState) => ({
      myBooks: currentState.myBooks.filter((c) => {
        return c.id !== book.id
      })
    }))
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

displayBookDetails = (book) => {
  this.setState((currentState) => ({
    extendedInfo: currentState.extendedInfo.concat([book])
    }))
}

closeExtended = (bookInfo) => {
  this.setState((currentState) => ({
    extendedInfo: currentState.extendedInfo.filter((c) => {
      return c.id !== bookInfo.id
    })
  }))
}


  render() {
    const { myShelfs, extendedInfo } = this.state
    return (   
      <div className="app">
         <Route exact path='/search' render={() => (
          <Search 
          books={this.state.myBooks}
          handleChange={this.addToShelf}
          myShelfs={myShelfs}
          displayBookDetails={this.displayBookDetails}
          />
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <div className="logo"></div>
            </div>
            <div className="list-books-content">

              {myShelfs.map((shelf, index) => (
                  <Shelf 
                  shelfTitle={shelf.shelfName}
                  shelfName={shelf.shelfCode}
                  myShelfs={myShelfs}
                  books={this.state.myBooks}
                  handleChange={this.addToShelf}
                  key={index}
                  displayBookDetails={this.displayBookDetails}
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

        {/* Display Extended Info */}
            
        {extendedInfo.length > 0 && (
              extendedInfo.map((bookInfo) => 
                <ExtendedInfo 
                bookInfo={bookInfo}
                myShelfs={myShelfs}
                handleChange={this.addToShelf}
                key={bookInfo.id}
                books={this.state.myBooks}
                closeExtended={this.closeExtended}
                />
              ))
            }
      </div>
    )
  }
}

export default BooksApp
