import React from 'react'
import './Hero.css'
import logo from "../assets/youf.png"

const Hero = () => {
  return (
    <>
    <section className='hero' id='home'>
        <div className='container f_flex top'>
            <div className='left top'>
                <h3>Welcome to funding</h3>
                <h1>Hey, We're <span>Youfundr</span></h1>
                <h2>
                    a
                    <span>

                    </span>
                </h2>
                <p>YYDHISIISISISIS JJJJJDJDJDJDJD OWOOWOWOWOWOWOWOWO OWOWOWOWOOWOW</p>
                <div className='hero_btn d_flex'>
                <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
                </div>
            </div>
            <div className='right'>
                <div className='right_img'>
                    <img src={logo} />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero