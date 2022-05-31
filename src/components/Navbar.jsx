import React from 'react'
import './Navbar.css'
import logo from '../assets/youf.png'

const Navbar = () => {
  return (
    <> 
    <header className='header'>
        <div className='container d_flex'>
            <div className='youfundrlogo'>
              <img src={logo} alt="" />
            </div>
            <div className='links'>
                <ul className=' link f_flex uppercase'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Documentation</a>
                    </li>
                    <li>
                        <a href="#">Prototype</a>
                    </li>
                    <li>
                       <button className='btn1'>Connect</button> 
                    </li>
                </ul>

                <button>
                <i className='fas fa-times close home-btn'></i>
                </button>

            </div>
        </div>
    </header>
    </>
  )
}

export default Navbar