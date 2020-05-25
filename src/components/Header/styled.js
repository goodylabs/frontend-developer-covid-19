import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  line-height: 80px;
  background-color: white;
  text-align: center;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  z-index: 998;
`;

export default StyledHeader;
