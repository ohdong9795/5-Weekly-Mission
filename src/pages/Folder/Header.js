import LinkAppender from './LinkAdder';
import { styled } from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f6ff;
`;

const StyledDiv = styled.div`
  @media screen and (min-width: 1124px) {
    width: 800px;
  }

  @media screen and (min-width: 769px) and (max-width: 1123px) {
    width: 700px;
  }

  @media screen and (max-width: 768px) {
    box-sizing: border-box;
    margin: 0px 32px;
    width: 100%;
  }
`;

function Header({ folderData }) {
  return (
    <StyledHeader>
      <StyledDiv>
        <LinkAppender folderData={folderData} />
      </StyledDiv>
    </StyledHeader>
  );
}

export default Header;
