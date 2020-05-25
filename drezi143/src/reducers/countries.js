const countries = (state = [], action) => {
    switch (action.type) {
        case "FETCH_COUNTRY_LIST_SUCCESS":
            return [...action.countries];
        default:
            return state;
    }
};

export default countries;
