import styled from 'styled-components';
import searchIcon from '@/assets/images/icons/search.png';
import closeButton from '@/assets/images/buttons/close2.png';
import { ChangeEvent } from 'react';
import Image from 'next/image';

const StyledDiv = styled.div`
  position: relative;
`;
const StyledInput = styled.input`
  width: 100%;
  height: 54px;
  line-height: 54px;
  background-color: #f5f5f5;
  border-radius: 10px;
  font-size: 16px;
  color: #666666;
  padding-left: 40px;
  border: none;
  outline: none;
  box-sizing: border-box;
`;
const StyledImg = styled(Image)`
  position: absolute;
  left: 15px;
  top: 19px;
`;
const ClearButton = styled(Image)`
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
`;

interface SearchProps {
  placeholder: string;
  searchState?: string;
  onInputChange?: (param: string) => void;
}

function Search({ placeholder, searchState, onInputChange }: SearchProps) {
  return (
    <StyledDiv>
      <StyledInput
        placeholder={placeholder}
        value={searchState}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onInputChange?.(e.target.value)}
      />
      <StyledImg src={searchIcon} width={15} height={15} alt='SearchIcon' />
      <ClearButton
        src={closeButton}
        width={24}
        height={24}
        alt='ClearButton'
        onClick={() => {
          onInputChange?.('');
        }}
        aria-label='ClearButton'
      />
    </StyledDiv>
  );
}

export default Search;
