const initialState = {
    byId: [],
    byHash: {},
};

const countryInformation = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_COUNTRY_INFORMATION_SUCCESS":
            return [action.countryInformation];
        default:
            return state;
    }
};

export default countryInformation;
