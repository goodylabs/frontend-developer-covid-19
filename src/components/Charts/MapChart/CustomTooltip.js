import React from 'react';
import PropTypes from 'prop-types';

import formatValue from '../../../utils';
import messages from './messages';
import { Header, TooltipContainer, DataContainer, ValuesContainer } from './styled';
import { StyledSpan } from '../../GlobalStatistics/styled';

const CustomTooltip = ({ header, data }) => (
  <TooltipContainer>
    <Header>{header}</Header>
    <DataContainer>
      {data ? (
        <ValuesContainer>
          <StyledSpan color="primary">{`${messages.totalCases}${formatValue`${data.totalConfirmed}`}`}</StyledSpan>
          <StyledSpan color="secondary">{`${messages.totalDeaths}${formatValue`${data.totalDeaths}`}`}</StyledSpan>
          <StyledSpan>{`${messages.totalRecovered}${formatValue`${data.totalRecovered}`}`}</StyledSpan>
        </ValuesContainer>
      ) : (
        messages.noData
      )}
    </DataContainer>
  </TooltipContainer>
);

CustomTooltip.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.number),
};

CustomTooltip.defaultProps = {
  data: null,
};

export default CustomTooltip;
