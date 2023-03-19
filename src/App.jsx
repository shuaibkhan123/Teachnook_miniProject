//import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { About } from './components/About'
import { Foot } from './components/Foot'
import { Hero } from './components/Hero'


function App() {
  return (
    <div className="mainApp">
      <Hero/>
      <About/>
      <Foot/>
    </div>
  )
}
export default App
