// import React, { useRef } from 'react'
import { BrowserRouter } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import '../App.css'
// import {About} from './About'
// import{Foot} from './Foot'
import logo from '../images/KHAN-logos_white.png'

export const Navbar = () => { 

  // const about=useRef(null);
  // const foot=useRef(null);
  // const scrollToSection=(elementRef)=>{
  //   window.scrollTo({
  //     top:elementRef.current.offsetTop,
  //     behavior:'smooth' 
  //   })
  // }
  return (
    <BrowserRouter>
    <div className="nav">
        <div className='navContainer'>
            <div className='navLinks'>
                <img src={logo} className='logo'/>
                <ul>
                    <li>
                      <Link to="#hero" smooth style={{color:"white",textDecoration:"none"}}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="#gallery" smooth style={{color:"white",textDecoration:"none"}}>
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link to="#info" smooth style={{color:"white",textDecoration:"none"}}>
                        Info
                      </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </BrowserRouter>
  )
}
