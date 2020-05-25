import styled from 'styled-components';

import { Colors } from '../../../constants';

export const Header = styled.h4`
  align-self: center;
  margin-bottom: 8px;
  color: ${Colors.white};
`;

export const TooltipContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const DataContainer = styled.div``;

export const ValuesContainer = styled(TooltipContainer)`
  padding: 0;
`;
