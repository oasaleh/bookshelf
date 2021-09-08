import styled from 'styled-components';
import BookCard from './BookCard';

/* ---------------------------------- style --------------------------------- */
const BookShelfDiv = styled.div`
  padding: 10px 50px;
`;
const ShelfName = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  font-weight: 500;
  width: fit-content;
`;
const BookTray = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  gap: 22px;
  padding: 30px 0px;
  background-color: #f2f3f4;
  border-radius: 5px;
  margin: auto;
`;
/* -------------------------------- component ------------------------------- */
const BookShelf = ({ emoji, title, books, updateShelf }) =>
  books || books.length ? (
    <BookShelfDiv>
      <ShelfName>
        <span style={{ fontSize: '30px' }}>{emoji}</span>
        <h3>{title}</h3>
      </ShelfName>
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
