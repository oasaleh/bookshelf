import { useCallback } from 'react';
import styled from 'styled-components';
import BookCard from './BookCard';

/* ---------------------------------- style --------------------------------- */

/* -------------------------------- component ------------------------------- */
const BookShelf = ({ title, books, updateShelf }) =>
  books || books.length ? (
    <div>
      <h3>{title}</h3>
      <div id="tray" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {books.map((book) => (
          <BookCard bookInfo={book} updateShelf={updateShelf} key={book.id} />
        ))}
      </div>
    </div>
  ) : (
    <div>
      <p>No Books!</p>
    </div>
  );

export default BookShelf;
