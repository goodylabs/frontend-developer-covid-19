import styled from 'styled-components';

import magnifierIcon from '../../assets/magnifier.svg';

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0;
`;

export const StyledInput = styled.input`
  padding: 20px 80px 20px 40px;
  font-size: 1.6rem;
  background-color: #ddd;
  border: none;
  border-radius: 50px;
  background-image: url(${magnifierIcon});
  background-size: 15px;
  background-position: 15px 50%;
  background-repeat: no-repeat;
  outline: none;

  &::placeholder {
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 1px;
    color: #bbb;
  }
`;
