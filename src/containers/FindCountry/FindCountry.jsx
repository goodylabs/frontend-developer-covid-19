import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import { setCountryData } from 'store/actions/findCountryAction';
import { loadingOn, loadingOff, setAlert, unsetAlert } from 'store/actions/appAction';
import { findCountry } from 'api/api'
import styles from './FindCountry.module.css'

const FindCountry = () => {
  const dispatch = useDispatch()
  const { countries } = useSelector(({ countries }) => countries)

  const [ countryField, setCountryField ] = useState('')
  const [ searchResult, setSearchResult ] = useState([])

  const handleSearchCountry = ({ target: { value } }) => {
    setCountryField(value)

    const searchedCountries = countries.filter(({ Country }) => Country.toLowerCase().startsWith(value.toLowerCase()))

    if (value.length) {
      setSearchResult(searchedCountries.slice(0, 6))
    } else {
      setSearchResult([])
    }
  }

  const handleSelectCountry = async country => {
    dispatch(loadingOn())

    const currentCountry = await findCountry(country)

    if (currentCountry) {
      dispatch(setCountryData(currentCountry))
  
      setCountryField('')
      setSearchResult([])
  
      dispatch(loadingOff())
    } else {
      dispatch(loadingOff())
      dispatch(setAlert('Error with getting data from API'))

      setTimeout(() => {
        dispatch(unsetAlert())
      }, 5000)
    }
  }

  return (
    <div className={ `wrapper ${ styles.Input }` }>
      <TextField
        id="outlined-basic"
        label="Find Country"
        variant="outlined"
        size="small"
        color="secondary"
        fullWidth={ true }
        value={ countryField }
        onChange={ event => handleSearchCountry(event) }
      />

      <div className={ styles.FloaringSearchWrapper }>
        { searchResult.length
          ? (
            <div className={ styles.FloaringSearch }>
              { searchResult.map(({ Country, Slug }, index) => (
                <div key={ index } className={ styles.FloaringResult }>
                  <button data-slug={ Slug } onClick={ () => handleSelectCountry(Slug) }>{ Country }</button>
                </div>
              )) }
            </div>
          )
          : null
        }
      </div>
    </div>
  )
}

export default FindCountry
