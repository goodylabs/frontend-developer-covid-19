import { covidAPI } from '../api'
import {
  FETCH_GLOBAL_DATA,
  FETCH_ERROR,
  ActionTypes,
  FETCH_DETAILS_ERROR,
  FETCH_DETAILS,
} from '../types/actions'
import Axios from 'axios'
import { Dispatch } from 'redux'
import { CountryDetails } from '../types/details'

export const fetchGlobalStats = () => async (
  dispatch: Dispatch<ActionTypes>
) => {
  try {
    const { data: covid } = await covidAPI.get('/summary')
    const { data: cont } = await Axios.get(
      'https://restcountries.eu/rest/v2/all'
    )
    const { data: plName } = await Axios.get(
      'https://gist.githubusercontent.com/lukaszfiszer/7185871/raw/b5665118984a59cd889f62018f8f96b3fc90bc94/ISO_3166-1_countries_pl.json'
    )
    const mappedCountries = covid.Countries.map((val) => {
      const found = cont.find(
        (country) => country.alpha2Code === val.CountryCode
      )
      const plFound = plName.find((name) => name.code === val.CountryCode)
      if (found) {
        return {
          ...val,
          Lat: found.latlng[0],
          Lng: found.latlng[1],
          PlName: plFound ? plFound.name_pl : '',
        }
      } else return val
    })

    return dispatch({
      type: FETCH_GLOBAL_DATA,
      payload: { Global: covid.Global, Countries: mappedCountries },
    })
  } catch (error) {
    return dispatch({ type: FETCH_ERROR })
  }
}

export const fetchDetailStats = (slug: string) => async (
  dispatch: Dispatch<ActionTypes>
) => {
  try {
    const { data: totalDetail } = await covidAPI.get(
      `/total/dayone/country/${slug}`
    )

    let mapped: CountryDetails[] = totalDetail.map((day) => {
      return {
        Confirmed: day.Confirmed,
        Deaths: day.Deaths,
        Recovered: day.Recovered,
        Date: day.Date,
      }
    })

    dispatch({
      type: FETCH_DETAILS,
      payload: mapped,
    })
  } catch (error) {
    dispatch({ type: FETCH_DETAILS_ERROR })
  }
}
