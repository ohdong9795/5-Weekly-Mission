import facebook from '../../assets/images/footer/facebook.png';
import twitter from '../../assets/images/footer/twitter.png';
import youtube from '../../assets/images/footer/youtube.png';
import instagram from '../../assets/images/footer/instagram.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SIZE } from './../../constants/size';

const StyledFooter = styled.footer`
  box-sizing: border-box;
  height: 160px;
  background-color: #111322;
  color: #676767;

  @media screen and (min-width: ${SIZE.tablet.minWidth}) {
    display: flex;
    justify-content: space-between;
    padding: 35px 104px 0px 104px;
  }

  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
    display: grid;
    grid-template-areas:
      'f2 f3'
      'f1 f3';
    justify-content: space-between;
    padding-top: 32px;
    padding: 32px 32px 0px 32px;
  }
`;

const StyledSpan = styled.span`
  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
    grid-area: f1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 32px;
  }
`;

const CenterDiv = styled.div`
  display: flex;
  gap: 30px;
  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
    grid-area: f2;
  }
`;

const IconDiv = styled.div`
  display: flex;
  gap: 10px;
  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
    grid-area: f3;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #676767;
`;

function Footer() {
  return (
    <>
      <StyledFooter>
        <StyledSpan id='f1'>©codeit - 2023</StyledSpan>
        <CenterDiv id='f2'>
          <StyledLink to='privacy' target='_blank'>
            Privacy Policy
          </StyledLink>
          <StyledLink to='faq' target='_blank'>
            FAQ
          </StyledLink>
        </CenterDiv>
        <IconDiv id='f3'>
          <Link to='https://www.facebook.com/' target='_blank'>
            <img src={facebook} alt='facebookIcon' />
          </Link>
          <Link to='https://twitter.com/' target='_blank'>
            <img src={twitter} alt='twitterIcon' />
          </Link>
          <Link to='https://www.youtube.com/' target='_blank'>
            <img src={youtube} alt='youtubeIcon' />
          </Link>
          <Link to='https://www.instagram.com/' target='_blank'>
            <img src={instagram} alt='instagramIcon' />
          </Link>
        </IconDiv>
      </StyledFooter>
    </>
  );
}

export default Footer;
