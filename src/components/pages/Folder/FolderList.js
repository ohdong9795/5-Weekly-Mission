import { useState } from 'react';
import FolderBox from './FolderBox';
import { styled } from 'styled-components';
import shareButtonImg from '../../../images/shareButton.png';
import nameChangeButtonImg from '../../../images/nameChangeButton.png';
import deleteButtonImg from '../../../images/deleteButton.png';

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  @media screen and (min-width: 1124px) {
    width: 1060px;
  }

  @media screen and (min-width: 769px) and (max-width: 1123px) {
    width: 700px;
  }

  @media screen and (max-width: 768px) {
    max-width: 687px;
  }
`;

const FlexDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: -25px;
`;

const ColumnFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FolderAdd = styled.span`
  display: inline-block;
  height: 35px;
  cursor: pointer;
  font-size: 16px;
  line-height: 35px;

  @media screen and (min-width: 769px) {
    border-radius: 5px;
    padding: 0px 5px;
    color: #6d6afe;
  }

  @media screen and (max-width: 768px) {
    background-color: #6d6afe;
    color: white;
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 101px;
    z-index: 9999;
    border-radius: 20px;
    width: 127px;
    text-align: center;
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;

function FolderList({ folderData, selectedId, setSelectedId }) {
  const [folderName, setFolderName] = useState('전체');
  const { data, loading, error } = folderData;

  return (
    <>
      <FlexDiv>
        <div>
          <FolderBox
            key={0}
            id={0}
            name={'전체'}
            selected={selectedId === 0}
            setSelectedId={setSelectedId}
            setFolderName={setFolderName}
          />
          {!loading &&
            error === null &&
            data.map((item) => (
              <FolderBox
                key={item.id}
                id={item.id}
                name={item.name}
                selected={selectedId === item.id}
                setSelectedId={setSelectedId}
                setFolderName={setFolderName}
              />
            ))}
        </div>
        <FolderAdd>폴더 추가 +</FolderAdd>
      </FlexDiv>
      <FlexDiv2>
        <h2>{folderName}</h2>
        <ColumnFlexDiv>
          {folderName === '전체' ? null : (
            <div>
              <StyledButton>
                <img src={shareButtonImg} alt='Share Button' />
              </StyledButton>
              <StyledButton>
                <img src={nameChangeButtonImg} alt='Name Change Button' />
              </StyledButton>
              <StyledButton>
                <img src={deleteButtonImg} alt='Delete Button' />
              </StyledButton>
            </div>
          )}
        </ColumnFlexDiv>
      </FlexDiv2>
    </>
  );
}

export default FolderList;
