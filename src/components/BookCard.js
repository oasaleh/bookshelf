import styled from 'styled-components';
import * as BooksAPI from '../BooksAPI';

/* ---------------------------------- style --------------------------------- */
const BookCardDiv = styled.div`
  /* margin: 0 10px; */
  padding: 5px;
  width: 130px;
  height: 250px;
`;
const ImageFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 240px; */
  padding: 5px 2px;
`;
const Image = styled.img`
  margin: auto;
  border-radius: 8px;
  border: 0.5px solid #e0e0e0;
`;
const DropDownMenu = styled.div`
  text-align: center;
  font-size: 0.75rem;
  & > * {
    background-color: #409d69;
    border-radius: 3px;
  }
`;
const TitleTag = styled.p`
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const AuthorTag = styled.p`
  font-size: 0.8rem;
  color: #616364;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
/* -------------------------------- component ------------------------------- */
const BookCard = ({ bookInfo, updateShelf }) => {
  async function handleChange(book, event) {
    event.preventDefault();
    const response = await BooksAPI.update(book, event.target.value);
    updateShelf();
  }
  // Some of the books do not have this property - I learned this the hard way...
  let imgUrl = '';
  if (bookInfo.imageLinks && bookInfo.imageLinks.thumbnail) {
    imgUrl = bookInfo.imageLinks.thumbnail;
  }
  return (
    <BookCardDiv>
      <ImageFrame>
        <Image src={imgUrl} alt={`${bookInfo.title} Cover`} />
      </ImageFrame>

      <DropDownMenu>
        <select
          value={bookInfo.shelf}
          onChange={(e) => handleChange(bookInfo, e)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="none">--None</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
        </select>
      </DropDownMenu>
      <TitleTag>{bookInfo.title}</TitleTag>
      <AuthorTag>{bookInfo.authors}</AuthorTag>
    </BookCardDiv>
  );
};

export default BookCard;
