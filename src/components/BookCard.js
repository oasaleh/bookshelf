import * as BooksAPI from '../BooksAPI';

const BookCard = ({ bookInfo, updateShelf }) => {
  async function handleChange(book, event) {
    // console.log(event);
    // console.log(event.target.value);
    const response = await BooksAPI.update(book, event.target.value);
    // const books = await BooksAPI.getAll();
    // const res = await BooksAPI.update(book, event.target.value);
    // updateShelf(event);
    // console.log(response);
    updateShelf();
    console.log('menu changed');
  }
  return (
    <div>
      <img
        src={bookInfo.imageLinks.thumbnail}
        alt={`${bookInfo.title} Cover`}
      />
      <div>
        <select
          value={bookInfo.shelf}
          onChange={(e) => handleChange(bookInfo, e)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
      <p>Title</p>
      <p>Author</p>
    </div>
  );
};

export default BookCard;
