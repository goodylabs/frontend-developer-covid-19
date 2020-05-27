import axios from 'axios';

const url = 'https://api.covid19api.com/';

export const fetchSummaryData = async () => {

    try {
        const { data: { Global} } = await axios.get(`${url}/summary`);

        const modifiedData = {
            Global,
        }

        return modifiedData;
    }
    catch (e) {

    }
}

export const fetchCountrySumarry = async () => {
    try {
        const { data: { Countries} } = await axios.get(`${url}/summary`);

        const modifiedData = {
            Countries,
        }
            return modifiedData;

    }
    catch (e) {

    }
}

/***********************************************************/

export const fetchCountriesData = async (country) => {

       let changableURL=`${url}total/country/${country}`;

    try {
        const { data } = await axios.get(changableURL);
        const modifiedData = data.map((Countrydata)=>({
                Confirmed: Countrydata.Confirmed,
                Date: new Date(Countrydata.Date).toDateString(),
                Deaths: Countrydata.Deaths,
                Recovered: Countrydata.Recovered
        }));

        return modifiedData;


    }
    catch (e) {

    }
}


/**************************************************************/


export const countries = async () =>{
    try {
        const  { data }  = await axios.get(`${url}countries`)
        const modedData = data.map((Countries)=>({
            Country: Countries.Country
        }));
        return modedData;
    }
    catch (e) {
        console.log(e);
    }

}