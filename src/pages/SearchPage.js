import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import BookShelf from '../components/BookShelf';
import BookCard from '../components/BookCard';

const Search = ({ allBooks, setAllBooks, updateShelf }) => {
  const [books, setBooks] = useState([]);
  const [searchField, setSearchField] = useState('');

  function isBookInLibrary(libraryBooks, searchResults) {
    // console.log('searchResults', searchResults);
    const refinedSearchResults = searchResults;
    if (!searchResults.error) {
      searchResults.forEach((book) => {
        libraryBooks.forEach((myBook) => {
          if (book.id === myBook.id) {
            refinedSearchResults.find(
              (newBook) => newBook.id === myBook.id,
            ).shelf = myBook.shelf;
            // console.log('hi');
          }
        });
      });
    }
    return refinedSearchResults;
  }

  const searchBooks = useCallback(async () => {
    const unrefinedSearechResults = await BooksAPI.search(searchField);
    const searchResults = isBookInLibrary(allBooks, unrefinedSearechResults);
    // console.log(searchResults);
    setBooks(searchResults);
    // console.log(searechResults);
  }, [searchField]);

  function handleChange(e) {
    setSearchField(e.target.value);
  }

  useEffect(() => {
    if (searchField) {
      searchBooks();
    }
  }, [searchField]);

  return (
    <div>
      <Link to="/">Back</Link>
      <div>
        <input
          type="text"
          value={searchField}
          onChange={(e) => handleChange(e)}
          placeholder="Search by title or author"
        />
      </div>
      <div>
        {(() => {
          if (books.error) {
            return <p>No books found!</p>;
          }
          if (searchField === '') {
            return <p>Search for books!</p>;
          }
          return (
            <BookShelf
              title="Search Results"
              books={books}
              updateShelf={updateShelf}
              emoji="🔍"
            />
          );
        })()}
      </div>
    </div>
  );
};

export default Search;
