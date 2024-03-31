import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import styled from 'styled-components';

const LogoImg = styled.img`
  @media screen and (min-width: 1124px) {
    height: 28px;
  }

  @media screen and (min-width: 769px) and (max-width: 1123px) {
    height: 24px;
  }

  @media screen and (max-width: 768px) {
    height: 16px;
  }
`;
const ProfileImg = styled.img`
  height: 28px;
  border-radius: 50%;
`;
const FlexDiv = styled.div`
  display: flex;
`;
const VerticalCenterSpan = styled.span`
  line-height: 28px;
  margin-left: 5px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media screen and (min-width: 1124px) {
    width: 1060px;
  }

  @media screen and (min-width: 769px) and (max-width: 1123px) {
    width: 700px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0px 32px 0px 32px;
  }
`;
const StyledNav = styled.nav`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;
  background-color: #F0F6FF;

  @media screen and (min-width: 769px) {
    height: 93px;
  }

  @media screen and (max-width: 768px) {
    height: 63px;
  }
`;

const LoginButton = styled.button`
  display: inline-block;
  width: 128px;
  height: 53px;
  border-radius: 8px;
  background: linear-gradient(90deg, rgb(109,106,254), rgb(106,227,254));
  color: white;
  text-align: center;
  line-height: 53px;
  font-size: 18px;
  text-decoration: none;
  border: none;
`;

function Nav({userData}) {
  const { data, loading, error } = userData;

  return (
    <StyledNav>
      <InnerDiv>
        <LogoImg src={logo} alt="LogoImage" /><Link to="/"></Link>
        {(!loading && error === null) ? 
        <FlexDiv>
          <ProfileImg src={data.profileImageSource} alt="프로필" />
          <VerticalCenterSpan>{data.email}</VerticalCenterSpan>
        </FlexDiv>
        : <LoginButton>로그인</LoginButton>}
      </InnerDiv>
    </StyledNav>
  );
}

export default Nav;