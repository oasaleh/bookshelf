import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as BooksAPI from '../BooksAPI';
import BookShelf from '../components/BookShelf';

/* ---------------------------------- style --------------------------------- */
const SubHeader = styled.div`
  margin: 10px 0 0px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: left;
  align-items: center;
`;
const BackButton = styled.button`
  background-color: transparent;
  border: 0px solid;
  border-radius: 6px;
  cursor: pointer;
  font-size: 35px;
  padding: 0px 10px;
  margin-right: 10px;
  :hover {
    background-color: #f2f3f4;
  }
`;
const SearchBar = styled.div`
  text-align: center;
  width: 100%;
  padding-right: 10px;
  & > input {
    padding: 6px 5px;
    font-size: 13px;
    width: 100%;
    border: 0.5px solid lightgray;
    border-radius: 6px;
  }
`;
const DisplayView = styled.div`
  text-align: center;
`;
/* -------------------------------- component ------------------------------- */
const Search = ({ allBooks, setAllBooks, updateShelf }) => {
  const [books, setBooks] = useState([]);
  const [searchField, setSearchField] = useState('');

  function isBookInLibrary(libraryBooks, searchResults) {
    const refinedSearchResults = searchResults;
    if (!searchResults.error) {
      searchResults.forEach((book) => {
        libraryBooks.forEach((myBook) => {
          if (book.id === myBook.id) {
            refinedSearchResults.find(
              (newBook) => newBook.id === myBook.id,
            ).shelf = myBook.shelf;
          }
        });
      });
    }
    return refinedSearchResults;
  }

  const searchBooks = useCallback(async () => {
    const unrefinedSearechResults = await BooksAPI.search(searchField);
    const searchResults = isBookInLibrary(allBooks, unrefinedSearechResults);
    setBooks(searchResults);
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
      <SubHeader>
        <Link style={{ width: 'fit-content' }} to="/">
          <BackButton type="button">🔙</BackButton>
        </Link>
        <SearchBar>
          <input
            type="text"
            value={searchField}
            onChange={(e) => handleChange(e)}
            placeholder="Search by title or author 🔍"
          />
        </SearchBar>
      </SubHeader>
      <DisplayView>
        {(() => {
          if (books.error) {
            return (
              <p>
                Sorry, I couldn&apos;t find a match.
                <span style={{ fontSize: '30px' }}> 😥</span>
              </p>
            );
          }
          if (searchField === '') {
            return (
              <p>
                Are you sure you typed something?
                <span style={{ fontSize: '30px' }}> 🤔</span>
              </p>
            );
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
      </DisplayView>
    </div>
  );
};

export default Search;
