import styled from 'styled-components';

const PopoverDiv = styled.div`
  position: absolute;
  left: 5px;
  bottom: -65px;
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 64px;
  z-index: 99;
`;

const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  font-size: 14px;
  color: black;
  background-color: white;
  box-shadow: 0px 0px 1px #808080;

  &:hover {
    color: #6d6afe;
    background-color: #e7effb;
  }
`;

function KebbabPopover({ handleDelete, handleAdd }) {
  return (
    <PopoverDiv>
      <Option onClick={handleDelete}>삭제하기</Option>
      <Option onClick={handleAdd}>폴더에 추가</Option>
    </PopoverDiv>
  );
}

export default KebbabPopover;
