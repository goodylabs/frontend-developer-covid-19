import React from 'react';
import PropTypes from 'prop-types';

import { StyledItem } from './styled';

const ListItem = ({ children, selectCountry }) => <StyledItem onClick={selectCountry}>{children}</StyledItem>;

export default ListItem;

ListItem.propTypes = {
  children: PropTypes.string.isRequired,
  selectCountry: PropTypes.func.isRequired,
};
