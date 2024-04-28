import { useEffect, useState } from 'react';
import FolderBox from './FolderBox';
import { styled } from 'styled-components';
import shareButtonImg from '../../images/shareButton.png';
import nameChangeButtonImg from '../../images/nameChangeButton.png';
import deleteButtonImg from '../../images/deleteButton.png';
import AddModal from './AddModal';
import ChangeModal from './ChangeModal';
import DeleteModal from './DeleteModal';
import ShareModal from './ShareModal';
import { useScript } from '../../hooks/useScript';

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

const ModalDiv = styled.div`
  position: relative;
`;

function FolderList({ folderData, selectedId, setSelectedId }) {
  const [folderName, setFolderName] = useState('전체');
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openShareModal, setOpenShareModal] = useState(false);
  const [openChangeModal, setOpenChangeModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const { data, loading, error } = folderData;
  const [scriptLoading, scriptError] = useScript('https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js');

  /* eslint-disable */
  useEffect(() => {
    if (!scriptLoading && scriptError === null) {
      if (Kakao?.isInitialized()) return;
      Kakao?.init('3d9ed3d2882a865e3a41390794c8ec0d');
    }
  }, [scriptLoading, scriptError]);

  const shareKakao = () => {
    const url = 'https://' + window.location.host + '/shared/' + selectedId;

    Kakao?.Share?.sendDefault({
      objectType: 'text',
      text: url,
      link: {
        mobileWebUrl: url,
        webUrl: url,
      },
    });
  };
  /* eslint-enable */

  function shareFacebook() {
    const url = 'https://' + window.location.host + '/shared/' + selectedId;
    window.open('https://www.facebook.com/sharer.php?u=' + url, 'facebook', 'toolbar=0,status=0,width=655,height=520');
  }

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
        <FolderAdd onClick={setOpenAddModal}>폴더 추가 +</FolderAdd>
      </FlexDiv>
      <FlexDiv2>
        <h2>{folderName}</h2>
        <ColumnFlexDiv>
          {folderName === '전체' ? null : (
            <div>
              <StyledButton onClick={setOpenShareModal}>
                <img src={shareButtonImg} alt='Share Button' />
              </StyledButton>
              <StyledButton onClick={setOpenChangeModal}>
                <img src={nameChangeButtonImg} alt='Name Change Button' />
              </StyledButton>
              <StyledButton onClick={setOpenDeleteModal}>
                <img src={deleteButtonImg} alt='Delete Button' />
              </StyledButton>
            </div>
          )}
        </ColumnFlexDiv>
      </FlexDiv2>
      <ModalDiv>
        {openAddModal && (
          <AddModal title='폴더 추가' width='360px' height='239px' padding='32px 40px' setter={setOpenAddModal} />
        )}
        {openShareModal && (
          <ShareModal
            title='폴더 공유'
            subtitle={folderName}
            width='360px'
            height='209px'
            padding='32px 40px'
            setter={setOpenShareModal}
            shareKakao={shareKakao}
            shareFacebook={shareFacebook}
          />
        )}
        {openChangeModal && (
          <ChangeModal
            title='폴더 이름 변경'
            width='360px'
            height='239px'
            padding='32px 40px'
            setter={setOpenChangeModal}
          />
        )}
        {openDeleteModal && (
          <DeleteModal
            title='폴더 삭제'
            width='360px'
            height='193px'
            padding='32px 40px'
            setter={setOpenDeleteModal}
            subtitle={folderName}
          />
        )}
      </ModalDiv>
    </>
  );
}

export default FolderList;
