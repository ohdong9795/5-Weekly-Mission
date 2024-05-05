import styled from 'styled-components';
import close from '../../assets/images/buttons/close.png';
import { ReactNode } from 'react';

const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 998;
`;

interface ModalDivProps {
  $width?: string;
  $height?: string;
  $padding?: string;
}

const ModalDiv = styled.div<ModalDivProps>`
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

interface ModalProps {
  title?: string;
  width?: string;
  height?: string;
  padding?: string;
  setter?: (param: boolean) => void;
  children?: ReactNode;
}

export default function Modal({
  title,
  width = '360px',
  height = 'auto',
  padding = '24px 0 15px 0',
  setter,
  children,
}: ModalProps) {
  const handleClose = () => {
    setter?.(false);
  };

  return (
    <ModalBack>
      <ModalDiv $width={width} $height={height} $padding={padding}>
        <CloseButton onClick={handleClose} aria-label='CloseButton'>
          <img src={close} alt='Modal close button' />
        </CloseButton>
        <TitleDiv>{title}</TitleDiv>
        {children}
      </ModalDiv>
    </ModalBack>
  );
}
