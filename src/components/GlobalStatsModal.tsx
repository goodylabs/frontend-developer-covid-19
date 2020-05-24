import React, { useState } from 'react'
import { Global } from '../types/globalStats'
import '../styles/globalModal.style.css'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

interface GlobalStatsModalProps {
  globalStats: Global
}

const GlobalStatsModal = ({ globalStats }: GlobalStatsModalProps) => {
  const [hide, setHide] = useState(false)
  const handleHide = () => {
    setHide(!hide)
  }

  return (
    <div className={`global-modal ${hide ? 'hide' : ''}`}>
      <div className="global-modal-header">
        <h2>Statystyki globalne</h2>
      </div>
      <div className="total-cases">
        <h3>Zakażenia</h3>
        <p>
          {globalStats.TotalConfirmed}(<span>+{globalStats.NewConfirmed}</span>)
        </p>
        <h3>Wyzdrowienia</h3>
        <p>
          {globalStats.TotalRecovered}(<span>+{globalStats.NewRecovered}</span>)
        </p>
        <h3>Śmierci</h3>
        <p>
          {globalStats.TotalDeaths}(<span>+{globalStats.NewDeaths}</span>)
        </p>
      </div>
      <IoIosArrowForward onClick={handleHide} className="hide-icon" size={30} />
      <div className={`show-box ${hide ? 'show' : ''}`}>
        <IoIosArrowBack size={30} onClick={handleHide} />
      </div>
    </div>
  )
}

export default GlobalStatsModal
