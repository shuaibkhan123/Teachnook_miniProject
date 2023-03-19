import React from 'react'
import '../App.css'
import {Navbar} from './Navbar'
import {Banner} from './Banner'
import {Design} from './Design'
export const Hero = () => {
  return (
    <div className="hero-main container relative" id='hero'>
        <div>
        <Navbar/>
        <Banner/>
        </div>
        <div className="hero-back absolute">
          <Design/>
        </div>
    </div>

  )
}
