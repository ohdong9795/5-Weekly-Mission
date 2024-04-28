import styled from 'styled-components';
import close from '../../images/close.png';

const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 998;
`;

const ModalDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  border-radius: 15px;
  padding: ${(props) => props.$padding};
  background-color: white;
  z-index: 999;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background: none;
  cursor: pointer;
`;

export default function Modal({ title, width, height, padding, setter, children }) {
  const handleClose = () => {
    setter?.(false);
  };

  return (
    <ModalBack>
      <ModalDiv $width={width} $height={height} $padding={padding}>
        <CloseButton onClick={handleClose}>
          <img src={close} alt='Modal close button' />
        </CloseButton>
        <TitleDiv>{title}</TitleDiv>
        {children}
      </ModalDiv>
    </ModalBack>
  );
}
