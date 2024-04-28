import { styled } from 'styled-components';

const NonSelectedSpan = styled.span`
  display: inline-block;
  height: 35px;
  border-radius: 5px;
  font-size: 16px;
  line-height: 35px;
  border: 1px solid #6d6afe;
  padding: 0px 5px;
  margin-right: 5px;
  cursor: pointer;
`;

const SelectedSpan = styled(NonSelectedSpan)`
  background-color: #6d6afe;
  color: white;
`;

function FolderBox({ id, name, selected, setSelectedId, setFolderName }) {
  return selected ? (
    <SelectedSpan>{name}</SelectedSpan>
  ) : (
    <NonSelectedSpan
      onClick={() => {
        setSelectedId(id);
        setFolderName(name);
      }}
    >
      {name}
    </NonSelectedSpan>
  );
}

export default FolderBox;
