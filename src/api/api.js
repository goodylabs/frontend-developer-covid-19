import axios from 'axios'
import { API_URL, API_SUMMARY, API_FIND_COUNTRY } from './apiConstants'

const getGlobalData = async () => {
  try {
    const { data } = await axios.get(`${ API_URL }${ API_SUMMARY }`)
    return data
  } catch (error) {
    return false
  }
}

const findCountry = async countryName => {
  try {
    const { data } = await axios.get(`${ API_URL }${ API_FIND_COUNTRY }/${ countryName }`)
    const pureData = []

    data.forEach(country => {
      const { Date: date } = country
      const isInArry = pureData.find(({ Date: pureDataDate }) => pureDataDate === date)
      if (!isInArry) pureData.push(country)
    })

    return pureData
  } catch (error) {
    return false
  }
}

export {
  getGlobalData,
  findCountry
}