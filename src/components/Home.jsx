import React, { useState } from 'react'
import HireMeBtn from './HireMeBtn'
import { TypeAnimation } from 'react-type-animation';
import portImg from '../images/port_img.jpg';
import './Home.css';
import blob from '../images/blob.svg';
function Home() {

  return (
    <div className='wrapper'>
      <div className="left">
          <div className="head">
            <h2>Hello, I am</h2>
             <h1><TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                ' Java Full Stack Developer',
                1000,
                ' Front-End Developer',
                1000,
                ' UI/UX Designer',
                1000,
                ' Web Developer',
                1000,
              ]}
              speed={50}
              style={{ fontSize: '1.5em' }}
              repeat={Infinity}
            /></h1>
            
          </div>
          <div className="para">
            <p>I am a Java developer who has keen interest on developing
              creative solutions for real-life problems. I would like to work
              in an positive mindset environment, where one can
              upgrade and provide value to living beings, & achieve the
              full potential.</p>
          </div>
          <div className="hire-me-btn">
            <HireMeBtn></HireMeBtn>
          </div>
      </div>
      <div className='right'>
        <img className="image_stye"src={portImg} alt='_image_here' height={"250px"} width={"220px"}></img>
        {/* <div className='blob'>
          <img src={blob}></img>
        </div> */}
      </div>
    
    </div>
  )
}

export default Home