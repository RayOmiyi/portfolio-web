import { Link } from "react-router-dom"
import "./AboutContent.css"
import React2 from "../assets/intro-bg.jpg"
import React from 'react'
const AboutContent = () => {
return (
    <div className="about">
        <div className="left">
            <h1 style={{color:"#000"}}>Who am I?</h1>
            <p>Welcome to my portfolio! I am thrilled to present a compilation of my projects that reflect my creativity, technical skills, and love for crafting engaging user experiences. With a foundation in HTML, CSS, JavaScript, and React, each project exemplifies my commitment to delivering clean, responsive, and visually appealing web applications. I believe in continuous learning and growth, and I am excited to embark on new challenges and collaborations in the ever-evolving world of web development. Thank you for visiting, and I hope you enjoy exploring my work as much as I enjoyed creating it!</p>
        <Link to="/project">
            <button className="btn">Projects</button>
        </Link>
        </div>
        <div className="right">
            <div className="img-container">

                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
)
}

export default AboutContent
