import styled from 'styled-components';
import { calcDateDiff, dateToString } from '../../common/date';
import { Link } from 'react-router-dom';
import noImage from '../../images/noImage.jpg';
import { handleImageError } from '../../common/error';

const ImgDiv = styled.div``;
const StyledImg = styled.img``;
const Time = styled.span``;
const Detail = styled.span``;
const CreatedDate = styled.span``;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 0px 3px #808080;
  overflow: hidden;

  @media screen and (min-width: 769px) {
    max-width: 340px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    border: 2px solid #6d6afe;
    margin: -2px;
  }

  ${Time},
  ${Detail},
  ${CreatedDate} {
    margin: 20px 20px 0 20px;
  }

  ${ImgDiv} {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }

  ${StyledImg} {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    &:hover {
      transform: scale(1.3);
    }
  }
  ${Time} {
    font-size: 13px;
    color: #666666;
  }
  ${Detail} {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 16px;
    color: black;
  }
  ${CreatedDate} {
    font-size: 14px;
    color: #333333;
    margin-bottom: 20px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Item({ createdAt, url, title, description, imageSource }) {
  return (
    <StyledLink to={url} target='_blank'>
      <StyledArticle>
        <ImgDiv>
          <StyledImg src={imageSource ? imageSource : noImage} alt={title} onError={handleImageError} />
        </ImgDiv>
        <Time>{calcDateDiff(new Date(), new Date(createdAt))}</Time>
        <Detail>
          {description ? (
            description
          ) : (
            <>
              <br />
              <br />
            </>
          )}
        </Detail>
        <CreatedDate>{dateToString(new Date(createdAt))}</CreatedDate>
      </StyledArticle>
    </StyledLink>
  );
}

export default Item;
