import axios from 'axios'

export const covidAPI = axios.create({
  baseURL: 'https://api.covid19api.com',
})
