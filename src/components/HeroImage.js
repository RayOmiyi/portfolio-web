import './HeroImage.css'
import React from 'react'
import Intro from "../assets/intro-bg.jpg"
// import {Link} from 'react-router-dom'
const HeroImage = () => {
return (
    <div className='hero'>
        <div className='mask'>
        <img className='intro-img' src={Intro} alt='intro'/>
        </div>
        <div className='content'>
            <p>HI, My NAME IS RAY OMIYI AND </p>
            <h1>I'M A FRONTEND DEVELOPER</h1>
            {/* <div>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div> */}
        </div>
    </div>
)
}

export default HeroImage
