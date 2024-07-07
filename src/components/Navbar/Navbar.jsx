import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='container'>
      <h2 className="nav_logo">WeatherApp.Inc</h2>

      <div className="navigation_area">
        <h3><Link to="/">Home</Link></h3>
        <h3><Link to="forecast">Forecast</Link></h3>
      </div>
    </nav>
  )
}

export default Navbar
