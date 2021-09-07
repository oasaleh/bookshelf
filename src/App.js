import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import LibraryView from './pages/LibraryView';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <LibraryView />
        </Route>
        <Route exact path="/search">
          <SearchPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
