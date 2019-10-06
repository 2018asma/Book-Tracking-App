import React from 'react'
import { Link } from 'react-router-dom'
import ReacDom from 'react-dom'
import BookShelf from './BookShelf'

class BookShelfs extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf shelfTitle='Currently Reading' booksList={this.props.currentlyReading}
              onShelfUpdate={this.props.onShelfUpdate}
            />
            <BookShelf shelfTitle='Want To Read' booksList={this.props.wantToread} onShelfUpdate={this.props.onShelfUpdate} />
            <BookShelf shelfTitle='Read' booksList={this.props.read} onShelfUpdate={this.props.onShelfUpdate} />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BookShelfs;