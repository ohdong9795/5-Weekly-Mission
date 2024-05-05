import { FetchData, FolderData, LinkData } from '../../common/api';
import Item from '../../components/common/Item';
import { styled } from 'styled-components';
import { SIZE } from '../../constants/size';

const EmptyDiv = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptySpan = styled.span`
  text-align: center;
  font-weight: bold;
  @media screen and (min-width: ${SIZE.PC.minWidth}) {
    width: 1060px;
  }

  @media screen and (min-width: ${SIZE.tablet.minWidth}) and (max-width: ${SIZE.tablet.maxWidth}) {
    width: 700px;
  }

  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
    max-width: 687px;
  }
`;

interface ItemsProps {
  folderData: FetchData<FolderData[]>;
  linkData: FetchData<LinkData[]>;
}

function Items({ folderData, linkData }: ItemsProps) {
  const { data, loading, error } = linkData;

  return (
    <>
      {!loading &&
        error === null &&
        (data?.length === 0 ? (
          <EmptyDiv>
            <EmptySpan>저장된 링크가 없습니다.</EmptySpan>
          </EmptyDiv>
        ) : (
          data?.map((item) => (
            <Item
              key={item.id}
              createdAt={item.created_at}
              url={item.url}
              title={item.title}
              description={item.description}
              imageSource={item.image_source}
              folderData={folderData}
              editable={true}
            />
          ))
        ))}
    </>
  );
}

export default Items;
