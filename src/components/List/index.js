import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import { StyledWrapper } from './styled';

const List = ({ filteredCountries, selectCountry }) => (
  <StyledWrapper>
    {filteredCountries.map((item) => {
      return (
        <ListItem selectCountry={selectCountry} key={item.CountryCode}>
          {item.Country}
        </ListItem>
      );
    })}
  </StyledWrapper>
);

export default List;

List.propTypes = {
  filteredCountries: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectCountry: PropTypes.func.isRequired,
};
