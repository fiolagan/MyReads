import React, { Component } from "react"


class AssignBook extends Component {

  shelfLabelStatus = (shelfLabel, book, books) => {
    let result = books.filter(obj => {
      return obj.id === book.id
    })
    
    if (books.some(v => (v.id === book.id))) {
      return result[0].shelf
  }
    else {
      return  "null"
    }
  }
    

    render () {
        const { shelfLabel, handleChange, book, books, index } = this.props
        return (
        
              <div className="book-shelf-changer">
                <select readOnly value={this.shelfLabelStatus(shelfLabel, book, books)} onChange={(e) => handleChange(book, e.target.value, index)}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="null">None</option>
                </select>
                
              </div>
            
        )
    }
}

export default AssignBook