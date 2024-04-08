import Item from '../../common/Item';
import { styled } from 'styled-components';

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
  @media screen and (min-width: 1124px) {
    width: 1060px;
  }

  @media screen and (min-width: 769px) and (max-width: 1123px) {
    width: 700px;
  }

  @media screen and (max-width: 768px) {
    max-width: 687px;
  }
`;

function Items({ linkData }) {
  const { data, loading, error } = linkData;

  if (error) console.log(error);

  return (
    <>
      {!loading &&
        error === null &&
        (data.length === 0 ? (
          <EmptyDiv>
            <EmptySpan>저장된 링크가 없습니다.</EmptySpan>
          </EmptyDiv>
        ) : (
          data.map((item) => (
            <Item
              key={item.id}
              createdAt={item.created_at}
              url={item.url}
              title={item.title}
              description={item.description}
              imageSource={item.image_source}
            />
          ))
        ))}
    </>
  );
}

export default Items;
