import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/youf.png'

const Navbar = () => {

    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })

    const [Mobile, setMobile] = useState(false)
  return (
    <> 
    <header className='header'>
        <div className='container d_flex'>
            <div className='youfundrlogo'>
              <h5>YouFundR</h5>
            </div>
            <div className='links'>
                <ul className={Mobile? "nav-links-mobile": "link f_flex uppercase"} onClick={() => setMobile(false)}>
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

                <button className='toggle' onClick={() => setMobile(!Mobile)}>
                {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                </button>

            </div>
        </div>
    </header>
    </>
  )
}

export default Navbar