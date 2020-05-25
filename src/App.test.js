import React from 'react';
import {fetchSummaryData, fetchCountrySumarry,countries, fetchCountriesData} from './Api/APIUtil'


test('axios test', () =>{
    const result = fetchSummaryData();
    expect(result).toBeDefined;
    const result2 = fetchCountrySumarry();
    expect(result2).toBeDefined;
    const result3 = countries();
    expect(result3).toBeDefined;
    const result4 = fetchCountriesData();
    expect(result4).toBeDefined;
});
