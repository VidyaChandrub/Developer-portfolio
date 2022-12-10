import './HeroImgstyles.css';

import React from 'react'
import introbg from '../assets/introbg.jpg'
import {Link} from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className="intro-img" src={introbg} alt="Introbg"/>
        </div>
        <div className='content'>
            <p>HI, I'M A SOFTWARE DEVELOPER.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/projects" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg