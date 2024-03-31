import styled from 'styled-components';
import searchIcon from '../../../images/Search.png';

const StyledDiv = styled.div`position: relative;`;
const StyledInput = styled.input`
  width: 100%;
  height: 54px;
  line-height: 54px;
  background-color: #F5F5F5;
  border-radius: 10px;
  font-size: 16px;
  color: #666666;
  padding-left: 40px;
  box-sizing: border-box
`;
const StyledImg = styled.img`
  position: absolute;
  left: 15px;
  top: 19px;
`;

function Search({ placeholder }) {
  return (
    <StyledDiv>
      <StyledInput placeholder={placeholder}></StyledInput>
      <StyledImg src={searchIcon} alt="SearchIcon"></StyledImg>
    </StyledDiv>
  );
}

export default Search