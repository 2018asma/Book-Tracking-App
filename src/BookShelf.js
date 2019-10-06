import React from 'react';
import Book from './Book';

class BookShelf extends React.Component {
  state = {}
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props.booksList.map((book) => {
                return <li key={book.id}>
                  <Book book={book} onShelfUpdate={this.props.onShelfUpdate} />
                </li>
              })
            }

          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;