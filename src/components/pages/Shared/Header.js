import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  background-color: #f0f6ff;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 769px) {
    height: 244px;
  }

  @media screen and (max-width: 768px) {
    height: 161px;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProfileImg = styled.img`
  border-radius: 50%;
  margin-bottom: 15px;
  @media screen and (min-width: 769px) {
    width: 60px;
    height: 60px;
  }

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
const UserNameSpan = styled.span`
  margin-bottom: 20px;
  @media screen and (min-width: 769px) {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const FolderNameSpan = styled.span`
  @media screen and (min-width: 769px) {
    font-size: 48px;
  }

  @media screen and (max-width: 768px) {
    font-size: 38px;
  }
`;

function Header({ userData, folderName }) {
  const { data, loading, error } = userData;

  return (
    <StyledHeader>
      <StyledDiv>
        {!loading && error === null ? (
          <>
            <ProfileImg src={data.profileImageSource} alt='프로필' />
            <UserNameSpan>{data.name}</UserNameSpan>
            <FolderNameSpan>{folderName}</FolderNameSpan>
          </>
        ) : (
          <div></div>
        )}
      </StyledDiv>
    </StyledHeader>
  );
}

export default Header;
