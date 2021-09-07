import { useState, useEffect, useCallback } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import * as BooksAPI from './BooksAPI';
import Header from './components/Header';
import LibraryView from './pages/LibraryView';
import SearchPage from './pages/SearchPage';

const View = styled.div`
  padding: 25px 40px;
`;
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
            <Route exact path="/">
              <LibraryView
                allBooks={allBooks}
                setAllBooks={setAllBooks}
                updateShelf={updateShelf}
              />
            </Route>
            <Route exact path="/search">
              <SearchPage
                allBooks={allBooks}
                setAllBooks={setAllBooks}
                updateShelf={updateShelf}
              />
            </Route>
          </Switch>
        ) : null}
      </div>
    </View>
  );
}

export default App;
