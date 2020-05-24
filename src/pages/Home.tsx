import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchGlobalStats } from '../actions'
import { useTypedSelector } from '../reducers'

import Map from '../components/Map'
import GlobalStatsModal from '../components/GlobalStatsModal'

import '../styles/home.style.css'

const Home = () => {
  const dispatch = useDispatch()
  const { countries, globalStats, alreadyFetched } = useTypedSelector(
    (state) => state.globalStats
  )
  useEffect(() => {
    !alreadyFetched && dispatch(fetchGlobalStats())
  }, [dispatch, alreadyFetched])
  return (
    <div className="home-screen-container">
      <Map countryStats={countries} />
      <GlobalStatsModal globalStats={globalStats} />
    </div>
  )
}

export default Home
