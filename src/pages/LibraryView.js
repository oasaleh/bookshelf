import BookShelf from '../components/BookShelf';

const LibraryView = ({ allBooks, setAllBooks, updateShelf }) => (
  <div>
    <div>
      <BookShelf
        emoji="📖"
        title="Currently Reading"
        books={allBooks.filter((book) => book.shelf === 'currentlyReading')}
        updateShelf={updateShelf}
      />
      <BookShelf
        emoji="📕"
        title="Want to Read"
        books={allBooks.filter((book) => book.shelf === 'wantToRead')}
        updateShelf={updateShelf}
      />
      <BookShelf
        emoji="📚"
        title="Read"
        books={allBooks.filter((book) => book.shelf === 'read')}
        updateShelf={updateShelf}
      />
    </div>
  </div>
);

export default LibraryView;
