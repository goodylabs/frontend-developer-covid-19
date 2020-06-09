import axios from 'axios';

const url =  'https://api.covid19api.com/summary';
const urlforDaily = 'https://covid19.mathdro.id/api';

export const fetchData = async() => {
    try{

        const {data: { Global, Date}} = await axios.get(url);

        const modifiedData = {
            Global,
            Date
        }

        return modifiedData;

    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${urlforDaily}/daily`);
       
        const modifiedDailyData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
      
        return modifiedDailyData
    } catch(error) {
        console.log(error)
    }
}

export const fetchCountries = async() => {
    try{

        const {data: {Countries}} = await axios.get(url);
<<<<<<< HEAD
=======
       // const {Countries} = await axios.get(url);
       
        // //--
        // const modifiedCountriesData = Countries.map((CountryData) => ({
        //     Country: CountryData.Country,
        //     CountryCode: CountryData.CountryCode
        // }))
        // console.log(modifiedCountriesData)
        // return modifiedCountriesData
        // //--

>>>>>>> bb96cf37f982f8ae9a31130b8ac4894232d982b5
      
        const result = Countries.map((country) => ({
            Country:country.Country, 
            CountryCode: country.CountryCode,
            TotalConfirmed: country.TotalConfirmed,
            TotalRecovered: country.TotalRecovered,
            TotalDeaths: country.TotalDeaths,
            NewConfirmed: country.NewConfirmed,
            NewRecovered: country.NewRecovered,
            NewDeaths: country.NewDeaths,
            Date: country.Date
        }))
        console.log(result)
        return result

    } catch (error) {
        console.log(error)
    }
}

