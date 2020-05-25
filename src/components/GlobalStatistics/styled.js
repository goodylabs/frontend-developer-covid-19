import styled from 'styled-components';

import { Colors } from '../../constants';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #eee;
  text-align: center;
  padding: 40px 0;
  font-weight: 600;
  font-size: 2rem;
`;

const handleColorGenre = (color) => {
  switch (color) {
    case 'primary':
      return Colors.yellow;
    case 'secondary':
      return Colors.red;
    default:
      return Colors.green;
  }
};

export const StyledSpan = styled.span`
  color: ${({ color }) => handleColorGenre(color)};
`;

export const Tile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  margin-right: 8px;
`;

export const Data = styled.span``;
