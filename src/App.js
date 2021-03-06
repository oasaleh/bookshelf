import { useState, useEffect, useCallback } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import * as BooksAPI from './BooksAPI';
import Header from './components/Header';
import LibraryView from './pages/LibraryView';
import SearchPage from './pages/SearchPage';

/* ---------------------------------- style --------------------------------- */
const View = styled.div`
  padding: 25px 40px;
  max-width: 900px;
  margin: auto;
`;
/* -------------------------------- component ------------------------------- */

function App() {
  const [loading, setLoadeding] = useState(true);
  const [allBooks, setAllBooks] = useState([]);

  const getBooks = useCallback(async () => {
    const books = await BooksAPI.getAll();
    setAllBooks(books);
    setLoadeding(false);
  }, []);

  useEffect(() => {
    getBooks();
  }, []);

  function updateShelf() {
    // setLoadeding(true);
    getBooks();
  }

  return (
    <View className="App">
      <Header />
      <div>
        {!loading ? (
          <Switch>
            <Route exact path="/search">
              <SearchPage
                allBooks={allBooks}
                setAllBooks={setAllBooks}
                updateShelf={updateShelf}
              />
            </Route>
            <Route path="/">
              <LibraryView
                allBooks={allBooks}
                setAllBooks={setAllBooks}
                updateShelf={updateShelf}
              />
            </Route>
          </Switch>
        ) : (
          <p>Loading!</p>
        )}
      </div>
    </View>
  );
}

export default App;
