import React from "react";

class Book extends React.Component {
  onBookShelfUpdate = (e) => {
    const shelf = e.target.value
    this.props.onShelfUpdate(this.props.book, shelf)
    console.log(this.props.book, shelf)
  }
  render() {
    const imgLinks = this.props.book.imageLinks
    return (

      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: imgLinks ? `url("${imgLinks.thumbnail}")` : 'none'

            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={this.onBookShelfUpdate} defaultValue={this.props.book.shelf}>
              {console.log(this.props.book.shelf)}
              <option value="move" disabled>
                Move to...
                </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>

    );
  }
}

export default Book;
