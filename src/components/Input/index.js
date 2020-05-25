import React from 'react';
import PropTypes from 'prop-types';

import { InputWrapper, StyledInput } from './styled';

const Input = ({ onChange, value, name }) => (
  <InputWrapper>
    <StyledInput value={value} placeholder={name} onChange={onChange} name={name} id={name} type="text" />
  </InputWrapper>
);

export default Input;

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
