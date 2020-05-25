import React from 'react';
import PropTypes from 'prop-types';

import { Spinner } from './styled';

const CircleSpinner = ({ size }) => <Spinner size={size} />;

CircleSpinner.propTypes = {
  size: PropTypes.number,
};

CircleSpinner.defaultProps = {
  size: 2,
};

export default CircleSpinner;
