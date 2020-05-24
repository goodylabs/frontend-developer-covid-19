import React, { useState, useEffect } from 'react'
import { useTypedSelector } from '../reducers'
import { fetchGlobalStats, fetchDetailStats } from '../actions'
import { useDispatch } from 'react-redux'
import { Country } from '../types/globalStats'

import '../styles/statistics.style.css'

import Chart from '../components/Chart'

const Statistics = () => {
  const global = useTypedSelector((state) => state.globalStats)
  const details = useTypedSelector((state) => state.details)
  const [viewDetails, setViewDetails] = useState(false)
  const [country, setCountry] = useState<Country>()
  const dispatch = useDispatch()
  const [term, setTerm] = useState('')
  const [errorType, seterrorType] = useState(0)

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!term) {
      seterrorType(2)
      return
    }
    const foundCountry = global.countries.find(
      (val) => val.PlName.toLowerCase() === term.toLowerCase()
    )

    if (foundCountry) {
      dispatch(fetchDetailStats(foundCountry.Slug))
      setViewDetails(true)
      setCountry(foundCountry)
      setTerm('')
      seterrorType(0)
    } else {
      setViewDetails(false)
      seterrorType(1)
    }
  }

  useEffect(() => {
    if (!global.alreadyFetched) dispatch(fetchGlobalStats())
  }, [global.alreadyFetched, dispatch])

  return (
    <div className="statistics-container">
      <h2>Statystyki dla kraju</h2>
      <form className="form-container" onSubmit={handleSearch}>
        <label htmlFor="search-input">Wyszukaj kraj:</label>
        <input
          placeholder={
            errorType === 2 ? 'To pole nie może być puste' : 'np. Polska'
          }
          disabled={global.error}
          id="search-input"
          className={errorType === 2 ? 'input-error' : ''}
          value={term}
          onChange={(val) => {
            setTerm(val.target.value)
          }}
          type="text"
        />
        <button className="search-button" type="submit" disabled={global.error}>
          Szukaj!
        </button>
        {errorType === 1 && (
          <p className="error">Nie udało się znaleźć tego kraju</p>
        )}
      </form>

      {(global.error || details.error) && (
        <div className="global-error">
          <p>Nie udało się pobrać danych z serwera</p>
          <p className="small">Spróbuj ponownie za kilka minut</p>
        </div>
      )}

      {viewDetails && (
        <div>
          <h3 className="stats-header">Statystyki dla: {country?.PlName}</h3>
          <div className="summary">
            <p>Suma zakażeń: {country?.TotalConfirmed}</p>
            <p>Suma śmierci: {country?.TotalDeaths}</p>
            <p>Suma wyzdrowień: {country?.TotalRecovered}</p>
          </div>
          <Chart details={details.countryDetails} />
        </div>
      )}
    </div>
  )
}

export default Statistics
