import { useCallback } from 'react';
import BookCard from './BookCard';

const BookShelf = ({ title, books, updateShelf }) => {
  console.log(null);
  return (
    <div>
      <h3>{title}</h3>
      <div id="tray" style={{ display: 'flex' }}>
        {console.log('BookShelf is being rendered.')}
        {books.map((book) => (
          <BookCard bookInfo={book} updateShelf={updateShelf} key={book.id} />
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
