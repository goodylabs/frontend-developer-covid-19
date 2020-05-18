import { combineReducers } from "redux"
import countriesReducer from "./reducers/countriesReducer"
import findCountryReducer from "./reducers/findCountryReducer"
import appReducer from "./reducers/appReducer"

const rootReducer = combineReducers({
  countries: countriesReducer,
  findCountry: findCountryReducer,
  app: appReducer
})

export default rootReducer