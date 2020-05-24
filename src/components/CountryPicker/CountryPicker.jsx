import React from 'react';

import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ data, onChange }) => {
  return (
    <Autocomplete
      onChange={(event, value) => {
        onChange(value);
      }}
      className={styles.picker}
      options={data.sort()}
      getOptionLabel={(option) => option}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder='Type to filter countries...'
          label='Country'
          variant='outlined'
        />
      )}
    />
  );
};

export default CountryPicker;
