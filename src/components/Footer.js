import "./Footer.css"
import React from 'react'
import {FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa'
import { Link } from "react-router-dom"

const Footer = () => {
return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                08154749707</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                rayikponmwonsaomiyi@gmail.com</h4>
                </div>
            </div>  
            <div className="right">
                <h4>About the company</h4>
                <p>A visual display of some of my best works. Still a work in progress. Feel free to reach out to me for constructive criticism and opportunities!</p>
            <div className="social">
                <Link to="https://twitter.com/omiyi_ray?t=IpvJ8pfjBJknW1FXqzm73A&s=08">
                <FaTwitter
                    size={30}
                    style={{color: "#fff", marginRight: "1rem"}}/>
                    </Link>
                <Link to="https://www.linkedin.com/feed/">
                <FaLinkedin
                    size={30}
                    style={{color: "#fff", marginRight: "1rem"}}/>
                </Link>
            </div>
            </div>
        </div>
    </div>
)
}
export default Footer
