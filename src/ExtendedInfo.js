import React, { Component } from "react"
import AssignBook from './AssignBook'

class ExtendedInfo extends Component {
    truncate = (bookDescription) => {
        return bookDescription.length > 400 ? bookDescription.substring(0, 400) + "..." : bookDescription;
    }

    render () {
        
        const { handleChange, books, index, myShelfs, bookInfo, closeExtended } = this.props
        let bookImage
        if (typeof(bookInfo.imageLinks)  !== 'undefined') {
         bookImage = bookInfo.imageLinks.thumbnail
            } else {
         bookImage = 'https://www.infomath-bib.de/tmp/pic/no_cover.gif'
        }

        return (
            <div className="extended-info-container">
                <div className="extended-info-card">
                    <div className="close-extended" onClick={() => closeExtended(bookInfo)}>X</div>

                    <div className="extended-info-details">
                        <h3>{bookInfo.title} </h3>
                        {bookInfo.authors !== undefined ? 
                        <h4>{bookInfo.authors.join(", ")}</h4>
                        : <h4>Author unknown</h4>}
                        
                        <p>
                        {bookInfo.description !== undefined ? 
                        <span style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>             
                        {this.truncate(bookInfo.description)}
                        </span>
                        : <span>Description not available.</span>}
                        </p>
                        <p className="published-info"><strong>Published by: </strong>{bookInfo.publisher} on {bookInfo.publishedDate}</p>
                    </div>

                    <div className="extended-info-details">
                        <div className="book-top">
                            <div className="book-cover" style={{ backgroundImage: `url(${bookImage})` }} ></div>
                            <AssignBook 
                            shelfLabel={bookInfo.shelf}
                            bookID={bookInfo.id}
                            handleChange={handleChange}
                            book={bookInfo}
                            books={books}
                            index={index}
                            myShelfs={myShelfs}
                            /> 
                        </div>  
                            
                        <p><a href={bookInfo.previewLink} target="_blank" rel="noopener noreferrer">Preview on Google</a></p>   
                    </div>
                </div>
            </div>
            
        )
    }
}

export default ExtendedInfo