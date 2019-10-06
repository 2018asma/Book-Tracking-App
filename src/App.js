import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelfs from './BookShelfs'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    routing: false
  }
  //++++ Start of Did Mount ++++
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books: books })
      })

  }
  // ++++ End of Did Mount ++++

  //++++ Start of  onShelfUpdate ++++
  onShelfUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(
        this.setState(() => ({
          books: this.state.books.map(b => {
            if (b.title === book.title) {
              b.shelf = shelf;
              return b
            } else {
              return b
            }
          }),
          routing: false
        }))
      )
  };
  //-------------
  render() {
    const cur = this.state.books.filter((book) => book.shelf === 'currentlyReading')
    const want = this.state.books.filter((book) => book.shelf === 'wantToRead')
    const read = this.state.books.filter((book) => book.shelf === 'read')
    return (
      <div className="app">
        <Route
          exact path='/'
          render={() => <BookShelfs
            currentlyReading={cur}
            wantToread={want}
            read={read}
            onShelfUpdate={this.onShelfUpdate}
          />}
        />
        <Route
          path='/search'
          render={() =>
            <Search
              books={this.state.books}
              onShelfUpdate={this.onShelfUpdate}
            />}
        />
      </div>
    )
  }
}

export default BooksApp
