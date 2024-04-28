import styled from 'styled-components';

const StyledInput = styled.input`
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

export default function Input({ width, height, margin, placeholder }) {
  return <StyledInput $width={width} $height={height} $margin={margin} placeholder={placeholder} />;
}
