import styled from 'styled-components';
/* ---------------------------------- style --------------------------------- */
const HeaderDiv = styled.div`
  border-bottom: 1px solid #616265;
`;
/* -------------------------------- component ------------------------------- */
const Header = () => (
  <HeaderDiv>
    <h1>Bookshelf</h1>
  </HeaderDiv>
);

export default Header;
