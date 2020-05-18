import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NativeSelect, FormControl } from '@material-ui/core';
import { setCurrentData } from 'store/actions/countriesAction'
import styles from './Countries.module.css'

const Countries = () => {
  
  const dispatch = useDispatch()
  const { global, countries } = useSelector(({ countries }) => countries)

  const handleChangeCountry = ({ target: { value } }) => {
    if (value === 'global') {
      dispatch(setCurrentData(global))
    } else {
      const currentCountry = countries.find(({ Country }) => Country === value)
      dispatch(setCurrentData(currentCountry))
    }
  }
  
  return (
    <div className={ `wrapper ${ styles.Select }` }>
      <FormControl fullWidth={ true } className={ styles.formControl }>
        <NativeSelect onChange={ event => handleChangeCountry(event) }>
          <option value="global">Global</option>
          { countries.map(({ Country }, i) => <option key={ i } value={ Country } >{ Country }</option>) }
        </NativeSelect>
      </FormControl>
    </div>
  )
}

export default Countries
