import { styled } from 'styled-components';
import linkIcon from '../../../images/icons_link.png';

const StyledDiv = styled.div`
  width: 100%;
  position: relative;
`;

const LinkInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 69px;
  line-height: 69px;
  font-size: 16px;
  padding-left: 50px;
  border: 1px solid #6d6afe;
  outline: none;
  border-radius: 15px;
`;

const StyledImg = styled.img`
  position: absolute;
  top: 25px;
  left: 20px;
`;

const AddButton = styled.button`
  display: inline-block;
  width: 80px;
  height: 37px;
  border-radius: 8px;
  background: linear-gradient(90deg, rgb(109, 106, 254), rgb(106, 227, 254));
  color: white;
  text-align: center;
  line-height: 37px;
  font-size: 18px;
  text-decoration: none;
  border: none;
  position: absolute;
  top: 16px;
  right: 20px;
`;

function LinkAppender() {
  return (
    <StyledDiv>
      <LinkInput placeholder='링크를 추가해 보세요' />
      <StyledImg src={linkIcon} />
      <AddButton>추가</AddButton>
    </StyledDiv>
  );
}

export default LinkAppender;
