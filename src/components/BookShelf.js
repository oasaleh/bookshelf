import { useCallback } from 'react';
import styled from 'styled-components';
import BookCard from './BookCard';

/* ---------------------------------- style --------------------------------- */
const BookShelfDiv = styled.div`
  /* width: 100vw; */
  margin: 20px 0px;
  padding: 10px 50px;
  /* border: 0.5px solid #dddee0; */
`;
const ShelfName = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  width: fit-content;
  border-bottom: 0.5px solid #8b949e;
`;
const BookTray = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  gap: 22px;
  margin-top: 8px;
  padding-top: 30px;
  background-color: #f2f3f4;
  border-radius: 5px;
`;
/* -------------------------------- component ------------------------------- */
const BookShelf = ({ title, books, updateShelf }) =>
  books || books.length ? (
    <BookShelfDiv>
      <ShelfName>{title}</ShelfName>
      <BookTray id="tray">
        {books.map((book) => (
          <BookCard bookInfo={book} updateShelf={updateShelf} key={book.id} />
        ))}
      </BookTray>
    </BookShelfDiv>
  ) : (
    <div>
      <p>No Books!</p>
    </div>
  );

export default BookShelf;
