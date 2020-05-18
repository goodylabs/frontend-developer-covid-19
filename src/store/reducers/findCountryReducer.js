import { SET_COUNTRY_DATA } from "store/actions/findCountryAction"

const initialState = {
  timestamp: [],
  current: {},
  updatedDate: ''
}

const findCountryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRY_DATA:
      const setCountryCurrentData = payload[payload.length - 1]
      return {
        ...state,
        timestamp: payload,
        current: {
          ...setCountryCurrentData,
          TotalConfirmed:setCountryCurrentData.Confirmed,
          TotalRecovered: setCountryCurrentData.Recovered,
          TotalDeaths: setCountryCurrentData.Deaths
        },
        updatedDate: setCountryCurrentData.Date
      }  

    default:
      return state
  }
}

export default findCountryReducer