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

    }
}

export const fetchDailyDate = async () => {
    try {
        const data = await axios.get(`${url}/daily`);
        console.log(data);
    } catch(error) {

    }
}