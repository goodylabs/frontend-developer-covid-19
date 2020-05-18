import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGlobalData } from 'api/api'
import { loadingOn, loadingOff, setAlert, unsetAlert } from 'store/actions/appAction'
import { setGlobalData } from 'store/actions/countriesAction'
import Cards from 'components/Cards/Cards'
import Countries from 'containers/Countries/Countries'
import Charts from 'components/Charts/Charts'
import FindCountry from 'containers/FindCountry/FindCountry'
import { Typography } from '@material-ui/core'

const Home = () => {
  const dispatch = useDispatch()

  const {
    current: countriesCurrent,
    updatedDate: countriesUpdatedDate
  } = useSelector(({ countries }) => countries)

  const {
    current: findCountryCurrent,
    updatedDate: findCountryUpdatedDate
  } = useSelector(({ findCountry }) => findCountry)
 
  useEffect(() => {
    (async () => {
      dispatch(loadingOn())

      const data = await getGlobalData()

      if (data) {
        dispatch(setGlobalData(data))
        dispatch(loadingOff())
      } else {
        dispatch(loadingOff())
        dispatch(setAlert('Error with getting data from API. Please, update your page!'))

        setTimeout(() => {
          dispatch(unsetAlert())
        }, 5000)
      }
    })()
  }, [dispatch])

  return (
    <>
      <div className="light">
        <Typography variant="h2" component="h1" align="center">Global</Typography>
        <Cards current={ countriesCurrent } updatedDate={ countriesUpdatedDate } />
        <Countries />
        <Charts />
      </div>
      
      <div className="dark">
        <Typography variant="h2" component="h1" align="center">Timestamp</Typography>
        <Cards current={ findCountryCurrent } updatedDate={ findCountryUpdatedDate } />
        <FindCountry />      
        <Charts chart="line" />
      </div>
    </>
  )
}

export default Home
