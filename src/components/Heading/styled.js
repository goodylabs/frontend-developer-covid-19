import styled from 'styled-components';

const StyledHeading = styled.h1`
  color: ${(props) => (props.main ? 'orangered' : '#808080')};
  padding: ${(props) => (props.main ? '' : '15px 0')};
  text-align: center;
`;

export default StyledHeading;
