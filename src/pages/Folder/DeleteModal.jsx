import styled from 'styled-components';
import Modal from '../../components/common/Modal';

const FolderName = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 22px;
  margin-top: 8px;
  font-size: 14px;
  line-height: 22px;
  color: #9fa6b2;
  word-break: break-all;
  overflow: hidden;
`;

const DeleteButton = styled.button`
  margin-top: 24px;
  width: 280px;
  height: 51px;
  border-radius: 8px;
  color: white;
  background-color: #ff5b56;
  border: none;
  font-size: 16px;
  font-weight: 600;
`;

export default function DeleteModal({ title, width, height, padding, setter, subtitle }) {
  return (
    <Modal title={title} width={width} height={height} padding={padding} setter={setter}>
      <FolderName>{subtitle}</FolderName>
      <DeleteButton>삭제하기</DeleteButton>
    </Modal>
  );
}
