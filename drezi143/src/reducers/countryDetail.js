const countryDetail = (state = {}, action) => {
    switch (action.type) {
        case "FETCH_COUNTRY_DETAIL_SUCCESS":
            return [action.countryDetail];
        default:
            return state;
    }
};

export default countryDetail;
