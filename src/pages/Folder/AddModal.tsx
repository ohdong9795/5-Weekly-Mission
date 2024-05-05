import styled from 'styled-components';
import Modal from '../../components/common/Modal';
import Input from '../../components/common/Input';

const AddButton = styled.button`
  width: 280px;
  height: 51px;
  border-radius: 8px;
  color: white;
  background: linear-gradient(90deg, rgba(109, 106, 254, 1) 0%, rgba(106, 227, 254, 1) 100%);
  border: none;
  font-size: 16px;
  font-weight: 600;
`;

interface AddModalProps {
  title?: string;
  width?: string;
  height?: string;
  padding?: string;
  setter?: (param: boolean) => void;
}

export default function AddModal({ title, width, height, padding, setter }: AddModalProps) {
  return (
    <Modal title={title} width={width} height={height} padding={padding} setter={setter}>
      <Input width='280px' height='60px' placeholder='내용 입력' margin='24px 0 15px 0' />
      <AddButton>추가하기</AddButton>
    </Modal>
  );
}
