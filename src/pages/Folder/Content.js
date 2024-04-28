import { API_INFO, putParams } from '../../common/api';
import useFetch from '../../hooks/useFetch';
import { styled } from 'styled-components';
import Search from '../../components/common/Search';
import Items from './Items';
import FolderList from './FolderList';
import { useState } from 'react';

const FlexMain = styled.main`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  box-sizing: border-box;
  padding: 0px 32px 0px 32px;
`;

const ContentDiv = styled.div`
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

function Content({ folderData }) {
  const [selectedId, setSelectedId] = useState(0);

  const { url: getDataUrl, method: getDataMethod } = API_INFO.endpoints.getData;
  const queryString = selectedId === 0 ? '' : '?folderId=' + selectedId;

  const linkData = useFetch(API_INFO.baseUrl + putParams(getDataUrl, '1') + queryString, getDataMethod);
  linkData.data = linkData.data?.data;

  return (
    <FlexMain>
      <ContentDiv>
        <Search placeholder={'링크를 검색해 보세요.'} folderData={folderData}></Search>
        <FolderList folderData={folderData} selectedId={selectedId} setSelectedId={setSelectedId} />
        <GridDiv>
          <Items folderData={folderData} linkData={linkData} />
        </GridDiv>
      </ContentDiv>
    </FlexMain>
  );
}

export default Content;
