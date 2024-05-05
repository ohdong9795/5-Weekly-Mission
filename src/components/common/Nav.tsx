import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import styled from 'styled-components';
import { UserData } from '../../common/api';
import { SIZE } from '../../constants/size';

const LogoImg = styled.img`
  @media screen and (min-width: ${SIZE.PC.minWidth}) {
    height: 28px;
  }

  @media screen and (min-width: ${SIZE.tablet.minWidth}) and (max-width: ${SIZE.tablet.maxWidth}) {
    height: 24px;
  }

  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
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
  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
    display: none;
  }
`;
const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media screen and (min-width: ${SIZE.PC.minWidth}) {
    width: 1060px;
  }

  @media screen and (min-width: ${SIZE.tablet.minWidth}) and (max-width: ${SIZE.tablet.maxWidth}) {
    width: 700px;
  }

  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
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
  background-color: #f0f6ff;

  @media screen and (min-width: ${SIZE.tablet.minWidth}) {
    height: 93px;
  }

  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
    height: 63px;
  }
`;

const StickyNav = styled(StyledNav)`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
`;

const LoginButton = styled.button`
  display: inline-block;
  width: 128px;
  height: 53px;
  border-radius: 8px;
  background: linear-gradient(90deg, rgb(109, 106, 254), rgb(106, 227, 254));
  color: white;
  text-align: center;
  line-height: 53px;
  font-size: 18px;
  text-decoration: none;
  border: none;
`;

interface NavProps {
  userData: { data?: UserData | null; loading?: boolean; error?: Error | null };
  isSample?: boolean;
}

function Nav({ userData, isSample }: NavProps) {
  const { data, loading, error } = userData;

  return (
    <StickyNav>
      <InnerDiv>
        <LogoImg src={logo} alt='LogoImage' />
        <Link to='/'></Link>
        {!loading && error === null ? (
          <FlexDiv>
            <ProfileImg src={isSample ? data?.profileImageSource : data?.image_source} alt='프로필' />
            <VerticalCenterSpan>{data?.email}</VerticalCenterSpan>
          </FlexDiv>
        ) : (
          <LoginButton>로그인</LoginButton>
        )}
      </InnerDiv>
    </StickyNav>
  );
}

export default Nav;
