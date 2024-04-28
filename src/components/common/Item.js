import styled from 'styled-components';
import { calcDateDiff, dateToString } from '../../common/date';
import { Link } from 'react-router-dom';
import noImage from '../../images/noImage.jpg';
import star from '../../images/star.png';
import kebbab from '../../images/kebab.png';
import { handleImageError } from '../../common/error';
import { useEffect, useRef, useState } from 'react';
import KebbabPopover from '../../pages/Folder/KebbabPopover';
import DeleteModal from '../../pages/Folder/DeleteModal';
import AddLinkModal from '../../pages/Folder/AddLinkModal';

const StyledArticle = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 0px 3px #808080;

  @media screen and (min-width: 769px) {
    max-width: 340px;
    height: 334px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 327px;
  }

  &:hover {
    border: 2px solid #6d6afe;
    margin: -2px;
  }
`;

const Content = styled.div`
  box-sizing: border-box;
  height: 135px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ImgDiv = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  &:hover {
    transform: scale(1.3);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 17px;
`;

const Time = styled.span`
  font-size: 13px;
  color: #666666;
`;

const KebbabButton = styled.button`
  position: relative;
  border: none;
  background: none;
  cursor: pointer;
`;

const Detail = styled.span`
  height: 49px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  line-height: 24px;
  color: black;
`;

const CreatedDate = styled.span`
  height: 19px;
  font-size: 14px;
  color: #333333;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const KebbabDiv = styled.div``;

const ModalDiv = styled.div`
  position: relative;
`;

const StarImg = styled.img`
  position: absolute;
  width: 34px;
  height: 34px;
  top: 15px;
  right: 15px;
  z-index: 99;
`;

function Item({ createdAt, url, title, description, imageSource, folderData, editable }) {
  const [openPopover, setOpenPopover] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openAddLinkModal, setOpenAddLinkModal] = useState(false);
  const kebbabRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (kebbabRef.current && !kebbabRef.current.contains(e.target)) {
        setOpenPopover(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <StyledArticle>
      {editable && <StarImg src={star} />}
      <StyledLink to={url} target='_blank'>
        <ImgDiv>
          <StyledImg src={imageSource ? imageSource : noImage} alt={title} onError={handleImageError} />
        </ImgDiv>
      </StyledLink>
      <Content>
        <CardHeader>
          <Time>{calcDateDiff(new Date(), new Date(createdAt))}</Time>
          {editable ? (
            <KebbabButton onClick={setOpenPopover}>
              <img src={kebbab} alt='kebbab'></img>
              <KebbabDiv ref={kebbabRef}>
                {openPopover && <KebbabPopover handleDelete={setOpenDeleteModal} handleAdd={setOpenAddLinkModal} />}
              </KebbabDiv>
            </KebbabButton>
          ) : (
            <div></div>
          )}
        </CardHeader>
        <Detail>{description}</Detail>
        <CreatedDate>{dateToString(new Date(createdAt))}</CreatedDate>
      </Content>
      <ModalDiv>
        {openDeleteModal && (
          <DeleteModal
            title='링크 삭제'
            width='360px'
            height='193px'
            padding='32px 40px'
            setter={setOpenDeleteModal}
            subtitle={url}
          />
        )}
        {openAddLinkModal && (
          <AddLinkModal
            title='폴더에 추가'
            width='360px'
            height='auto'
            padding='32px 40px'
            setter={setOpenAddLinkModal}
            url={url}
            folderData={folderData}
          />
        )}
      </ModalDiv>
    </StyledArticle>
  );
}

export default Item;
