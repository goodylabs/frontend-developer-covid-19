import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import Statistics from './pages/Statistics'

import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/stats" component={Statistics} />
      </div>
    </Router>
  )
}

export default App
