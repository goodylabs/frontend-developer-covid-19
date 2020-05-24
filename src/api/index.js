import axios from 'axios';
import { statuses, urls } from '../constants';

export const fetchData = async () => {
  try {
    const {
      data: {
        Global: { TotalConfirmed, TotalRecovered, TotalDeaths },
        Date
      }
    } = await axios.get(urls.summary);

    return {
      data: {
        confirmed: TotalConfirmed,
        recovered: TotalRecovered,
        deaths: TotalDeaths,
        lastUpdate: Date
      },
      status: statuses.SUCCESS
    };
  } catch (error) {
    return { data: { error }, status: statuses.ERROR };
  }
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(urls.countries);
    const countries = data.map((country) => country.Country);

    return {
      data: countries,
      status: statuses.SUCCESS
    };
  } catch (error) {
    return { data: { error }, status: statuses.ERROR };
  }
};

export const fetchCountryData = async (countryName) => {
  if (!countryName) {
    return {
      data: [],
      status: statuses.NODATA
    };
  }

  try {
    const { data } = await axios.get(`${urls.country}${countryName}`);
    const countryData = data.map((el) => ({
      confirmed: el.Confirmed,
      recovered: el.Recovered,
      deaths: el.Deaths,
      date: el.Date
    }));

    if (countryData && countryData.length) {
      const firstNoZeroIndex = countryData.findIndex((c) => c.confirmed > 0);

      return {
        data: countryData.slice(firstNoZeroIndex),
        status: statuses.SUCCESS
      };
    }

    return {
      data: [],
      status: statuses.NODATA
    };
  } catch (error) {
    return { data: [], status: statuses.NODATA };
  }
};
