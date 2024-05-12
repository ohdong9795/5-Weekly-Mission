import { API_INFO, Data, FetchData, FolderData, LinkData, putParams } from '@/common/api';
import useFetch from '@/hooks/useFetch';
import { styled } from 'styled-components';
import Search from '@/components/common/Search';
import Items from './Items';
import FolderList from './FolderList';
import { useEffect, useState } from 'react';
import { SIZE } from '@/constants/size';

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

  @media screen and (min-width: ${SIZE.PC.minWidth}) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 100px;
  }

  @media screen and (min-width: ${SIZE.tablet.minWidth}) and (max-width: ${SIZE.tablet.maxWidth}) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 100px;
  }

  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
    grid-template-columns: 1fr;
    margin-bottom: 60px;
  }
`;

interface ContentProps {
  folderData: FetchData<FolderData[]>;
}

function Content({ folderData }: ContentProps) {
  const [selectedId, setSelectedId] = useState(0);
  const [searchValue, setSearchValue] = useState('');

  const { url: getDataUrl, method: getDataMethod } = API_INFO.endpoints.getData;
  const queryString = selectedId === 0 ? '' : '?folderId=' + selectedId;

  const linkData = useFetch<Data<LinkData>>({
    url: API_INFO.baseUrl + putParams(getDataUrl, '1') + queryString,
    method: getDataMethod,
    immediate: true,
  });

  const [itemData, setItemData] = useState<FetchData<LinkData[]>>({
    data: linkData.data ? linkData.data.data : null,
    loading: linkData.loading,
    error: linkData.error,
  });

  useEffect(() => {
    setItemData({
      data: linkData.data
        ? linkData.data.data.filter((item) => {
            return (
              item.url?.includes(searchValue) ||
              item.title?.includes(searchValue) ||
              item.description?.includes(searchValue)
            );
          })
        : null,
      loading: linkData.loading,
      error: linkData.error,
    });
  }, [linkData.data, linkData.error, linkData.loading, searchValue]);

  return (
    <FlexMain>
      <ContentDiv>
        <Search placeholder={'링크를 검색해 보세요.'} searchState={searchValue} onInputChange={setSearchValue} />
        <FolderList folderData={folderData} selectedId={selectedId} setSelectedId={setSelectedId} />
        <GridDiv>
          <Items folderData={folderData} linkData={itemData} />
        </GridDiv>
      </ContentDiv>
    </FlexMain>
  );
}

export default Content;
