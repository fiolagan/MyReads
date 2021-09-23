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
        const { shelfLabel, handleChange, book, books, index, myShelfs } = this.props
        return (
        
            <div className="book-shelf-changer">
              <select readOnly value={this.shelfLabelStatus(shelfLabel, book, books)} onChange={(e) => handleChange(book, e.target.value, index)}>
                <option value="move" disabled>Move to...</option>
                {myShelfs.map((shelf) => (
                  <option value={shelf.shelfCode} key={shelf.shelfID}>{shelf.shelfName}</option>
                ))}
                <option value="null">None</option>
              </select>
            </div>
            
        )
    }
}

export default AssignBook