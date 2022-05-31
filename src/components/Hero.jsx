import React from "react"
import "./Hero.css"
import hero from "../assets/youf.png"

import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO ORGANIC FUNDING</h3>
            <h1>
              Hi, We're <span>YOUFUNDR</span>
            </h1>
            <h2>
              INVESTING IN 
              <span>
                <Typewriter words={[" PEOPLE.", " DAOS.", " PROTOCOLS"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>We're a platform that allows individuals and communities to raise the needed capital they need to conquer the world, Our mission is simple, put the money back into the hands of the people</p>

            <button className="btn2">Get started</button>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND US AT</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                  <a href="https://github.com/youFundr"><i class="fa-brands fa-github"></i></a>
                  </button>
                  <button className='btn_shadow'>
                  <a href="https://twitter.com/YouFundR"><i class="fa-brands fa-twitter"></i></a>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
              {/* <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div> */}
            </div>
          </div>
          {/* <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Home