const initState = {
  globalData: {},
  countriesData: [],
  singleCountryData: [],
};

const rootReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'FETCH_COUNTRIES_DATA':
      return {
        ...state,
        globalData: payload.Global,
        countriesData: payload.Countries,
      };

    case 'FETCH_SINGLE_COUNTRY':
      return {
        ...state,
        singleCountryData: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
