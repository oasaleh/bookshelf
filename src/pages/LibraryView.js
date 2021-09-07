import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import BookShelf from '../components/BookShelf';
// import PropTypes from 'prop-types';

const LibraryView = () => {
  const [loading, setLoadeding] = useState(true);
  const [allBooks, setAllBooks] = useState([]);
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [wantToReadBooks, setWantToReadBooks] = useState([]);
  const [update, setUpdate] = useState(true);

  const getBooks = useCallback(async () => {
    const books = await BooksAPI.getAll();
    setAllBooks(books);
    setCurrentlyReadingBooks(
      books.filter((book) => book.shelf === 'currentlyReading'),
    );
    setReadBooks(books.filter((book) => book.shelf === 'read'));
    setWantToReadBooks(books.filter((book) => book.shelf === 'wantToRead'));
    setLoadeding(false);
  }, []);

  useEffect(() => {
    // async function getBooks() {
    //   const books = await BooksAPI.getAll();
    //   setAllBooks(books);
    //   setCurrentlyReadingBooks(
    //     books.filter((book) => book.shelf === 'currentlyReading'),
    //   );
    //   setReadBooks(books.filter((book) => book.shelf === 'read'));
    //   setWantToReadBooks(books.filter((book) => book.shelf === 'wantToRead'));
    //   setLoadeding(false);
    // }

    // return () => {
    //   cleanup
    // }
    console.log('useEffect ran!');
    getBooks();
  }, []);

  function updateShelf() {
    setLoadeding(true);
    getBooks();
    // console.log(e);
    console.log('updateShelf ran!');
  }
  // function updateShelf(oldShelf, newShelf, book) {}

  return (
    // allBooks.length !== 0 &&
    // currentlyReadingBooks.length !== 0 &&
    // wantToReadBooks.length !== 0 &&
    // readBooks.length !== 0 &&
    !loading && (
      <div>
        <div>
          {console.log('LibraryView is being rendred')}
          <BookShelf
            title="Currently Reading"
            books={currentlyReadingBooks}
            updateShelf={updateShelf}
          />
          <BookShelf
            title="Want to Read"
            books={wantToReadBooks}
            updateShelf={updateShelf}
          />
          <BookShelf title="Read" books={readBooks} updateShelf={updateShelf} />
        </div>
        <button type="button">
          <Link to="/search">+</Link>
        </button>
      </div>
    )
  );
};

// LibraryView.propTypes = {};

export default LibraryView;
