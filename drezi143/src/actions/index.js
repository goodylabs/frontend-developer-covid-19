export const countriesFetched = (countries) => ({
    type: "FETCH_COUNTRY_LIST_SUCCESS",
    countries,
});

export const countryToGetDetailFetched = (countryDetail) => ({
    type: "FETCH_COUNTRY_DETAIL_SUCCESS",
    countryDetail,
});

export const countryInformationFetched = (countryInformation) => ({
    type: "FETCH_COUNTRY_INFORMATION_SUCCESS",
    countryInformation,
});
