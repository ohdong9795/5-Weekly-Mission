import styled from 'styled-components';
import { LinkSample } from '../../common/api';
import Item from '../../components/common/Item';
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

interface SampleItemsProps {
  linkData: { data: LinkSample | null; loading: boolean; error: Error | null };
}

function SampleItems({ linkData }: SampleItemsProps) {
  const { data, loading, error } = linkData;

  return (
    <>
      {!loading &&
        error === null &&
        (data?.folder?.links.length === 0 ? (
          <EmptyDiv>
            <EmptySpan>저장된 링크가 없습니다.</EmptySpan>
          </EmptyDiv>
        ) : (
          data?.folder?.links.map((item) => (
            <Item
              key={item.id}
              createdAt={item.createdAt}
              url={item.url}
              title={item.title}
              description={item.description}
              imageSource={item.imageSource}
            />
          ))
        ))}
    </>
  );
}

export default SampleItems;
