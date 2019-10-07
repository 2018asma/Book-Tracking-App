import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book';



class Search extends React.Component {
  state = {
    resulte: []
  }
  search = (e) => {
    const query = e.target.value;
    if (!query) {
      this.setState({ resulte: [] });
      return;
    }

    //-----------------------------
    BooksAPI.search(query).then(resulte => {
      if (resulte.error) {
        resulte = [];
      }
      resulte = resulte.map((book) => {
        const bookInShelf = this.props.books.find(b => b.id === book.id);
        if (bookInShelf) {
          book.shelf = bookInShelf.shelf;
        }
        return book;
      });
      this.setState({ resulte });
    });
  };

  render() {
    console.log(this.state.resulte)
    return (
      <div className="search-books">
        <div className="search-books-bar" >
          <Link className="close-search" to='/' >close</Link>
          <div className="search-books-input-wrapper" >
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.search} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.resulte && this.state.resulte.map(book => (
              <li key={book.id}>
                <Book book={book} onShelfUpdate={this.props.onShelfUpdate} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;