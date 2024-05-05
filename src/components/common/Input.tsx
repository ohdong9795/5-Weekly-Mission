import styled from 'styled-components';

interface StyledInputProps {
  $width?: string;
  $height?: string;
  $margin?: string;
}

const StyledInput = styled.input<StyledInputProps>`
  box-sizing: border-box;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  margin: ${(props) => props.$margin};
  border-radius: 8px;
  border: 1px solid #ccd5e3;
  padding: 0 15px;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    border: 1px solid #6d6afe;
  }

  &:focus {
    outline: 1px solid #6d6afe;
  }
`;

interface InputProps {
  width?: string;
  height?: string;
  margin?: string;
  placeholder?: string;
}

export default function Input({ width, height, margin, placeholder }: InputProps) {
  return <StyledInput $width={width} $height={height} $margin={margin} placeholder={placeholder} />;
}
