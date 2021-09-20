import React, { Component } from "react"


class AssignBook extends Component {

    render () {

        const { shelfLabel, handleChange, bookID, book } = this.props
        return (
        
              <div className="book-shelf-changer">
                <select readOnly value={shelfLabel} onChange={(e) => handleChange(bookID, e.target.value, book)}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
                
              </div>
            
        )
    }
}

export default AssignBook