import React from 'react'
import { useLocation, Link } from 'react-router-dom'

import '../styles/header.style.css'

const Header = () => {
  const location = useLocation()
  return (
    <header>
      <Link to="/">
        <h2 className="main-title">COVID-19</h2>
      </Link>
      <ul className="navigation">
        <Link to="/">
          <li className={location.pathname === '/' ? 'active' : ''}>Mapa</li>
        </Link>
        <Link to="/stats">
          <li className={location.pathname === '/stats' ? 'active' : ''}>
            Statystyki
          </li>
        </Link>
      </ul>
    </header>
  )
}

export default Header
