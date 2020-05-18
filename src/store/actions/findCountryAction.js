const SET_COUNTRY_DATA = 'SET_COUNTRY_DATA'

const setCountryData = data => ({
  type: SET_COUNTRY_DATA,
  payload: data
})

export {
  SET_COUNTRY_DATA,
  setCountryData
}