import React from 'react'
import "./Loader.css"

function Loader() {
  return (
    <>
        <h1 className='loading_content'>
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        </h1>
    </>
  )
}

export default Loader