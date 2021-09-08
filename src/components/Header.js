import { Link } from 'react-router-dom';
import styled from 'styled-components';
/* ---------------------------------- style --------------------------------- */
const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #616265;
`;
const AddButton = styled.button`
  border: 0px solid;
  border-radius: 6px;
  cursor: pointer;
  font-size: 35px;
  margin-bottom: 2px;
  padding-bottom: 0px;
  padding-top: 0px;
  /* margin-right: 30px;
  padding-right: 50px; */
  /* position: absolute; */
  background-color: #ffffff;
  :hover {
    background-color: #f2f3f4;
  }
`;
/* -------------------------------- component ------------------------------- */
const Header = () => (
  <HeaderDiv>
    <h1>Bookshelf</h1>
    <Link to="/search">
      <AddButton type="button">
        <span>📘</span>
      </AddButton>
    </Link>
  </HeaderDiv>
);

export default Header;
