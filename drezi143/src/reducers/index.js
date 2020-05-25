import { combineReducers } from "redux";
import countries from "./countries";
import countryDetail from "./countryDetail";
import countryInformation from "./countryInformation";

export const reducers = combineReducers({
    countries: countries,
    countryDetail: countryDetail,
    countryInformation: countryInformation,
});
