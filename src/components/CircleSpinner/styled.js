import styled, { keyframes } from 'styled-components';

import { Colors } from '../../constants';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border-radius: 50%;
  width: ${(props) => props.size}em;
  height: ${(props) => props.size}em;
  font-size: 10px;
  border-top: ${(props) => props.size / 10}em solid rgba(255, 255, 255, 0.2);
  border-right: ${(props) => props.size / 10}em solid rgba(255, 255, 255, 0.2);
  border-bottom: ${(props) => props.size / 10}em solid rgba(255, 255, 255, 0.2);
  border-left: ${(props) => props.size / 10}em solid ${Colors.black};
  animation: ${spin} 1.1s infinite linear;
  margin: 0;
`;
