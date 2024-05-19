import { SyntheticEvent } from 'react';
import styled from 'styled-components';

interface StyledInputProps {
  $width?: string;
  $height?: string;
  $margin?: string;
  $padding?: string;
  $hasError?: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
  box-sizing: border-box;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  border: ${(props) => (props.$hasError ? '1px solid red !important' : '1px solid #ccd5e3 !important')};
  outline-color: ${(props) => (props.$hasError ? 'red !important' : '')};

  border-radius: 8px;
  border: 1px solid #ccd5e3;
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
  padding?: string;
  placeholder?: string;
  onBlur?: (param: SyntheticEvent) => void;
  onChange?: (param: SyntheticEvent) => void;
  hasError?: boolean;
  type?: string;
}

export default function Input({
  width,
  height,
  margin,
  padding,
  placeholder,
  onBlur,
  onChange,
  hasError,
  type,
}: InputProps) {
  return (
    <StyledInput
      $width={width}
      $height={height}
      $margin={margin}
      $padding={padding}
      $hasError={hasError}
      type={type}
      placeholder={placeholder}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
}
