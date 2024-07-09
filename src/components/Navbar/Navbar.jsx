import React from 'react'
import "./Navbar.css"

function Navbar({theme}) {
  return (
    <nav className='container'>
      <h2 className="nav_logo">WeatherApp.Inc</h2>

      <div className="navigation_area">
        {/* <h3><Link to="/">Home</Link></h3>
        <h3><Link to="forecast">Forecast</Link></h3> */}
        <button onClick={()=> theme()}>♾️</button>
      </div>
    </nav>
  )
}

export default Navbar
