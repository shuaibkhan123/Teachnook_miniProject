import React from 'react'
import '../App.css'
import india from "../images/35176656-PhotoRoom.png-PhotoRoom.png"
export const Banner = () => {
  return (
    <div className='banner'>
      <div className="banner-container">
        <div className="left">
          <h1>HISTORICAL PLACES<br/>IN<span> INDIA</span></h1>
        </div>
        <div className="right">
          {/* 3d */}
          <img className="india" src={india} alt="india" />


        </div>
      </div>
    </div>
  )
}