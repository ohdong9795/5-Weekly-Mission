import Items from "./Items";
import Search from "./Search";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  box-sizing: border-box;
  padding: 0px 32px 0px 32px;
`;

const StyledDiv = styled.div`
  max-width: 1060px;
  margin-top: 40px;
`;

const GridDiv = styled.div`
  margin-top: 40px;
  display: grid;
  width: 100%;
  gap: 20px;

  @media screen and (min-width: 1124px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 769px) and (max-width: 1123px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 60px;
  }
`;

function Content({linkData}) {
  return (
    <StyledMain>
      <StyledDiv>
        <Search placeholder={'링크를 검색해 보세요.'}></Search>
        <GridDiv>
          <Items linkData={linkData}/>
        </GridDiv>
      </StyledDiv>
    </StyledMain>
  );
}

export default Content;