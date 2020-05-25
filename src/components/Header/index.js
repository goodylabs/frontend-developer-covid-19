import React from 'react';

import Heading from '../Heading';
import messages from './messages';
import StyledHeader from './styled';

const Header = () => (
  <StyledHeader>
    <Heading main>{messages.header}</Heading>
  </StyledHeader>
);
export default Header;
