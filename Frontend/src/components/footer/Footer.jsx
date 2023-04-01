import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {BsFacebook, BsInstagram} from 'react-icons/bs'

import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="left section">
        <a href="#">PRIVACY POLICY</a>
        <a href="#">TERMS & CONDITION</a>
        <a href="#">ABOUT</a>
      </div>
      <div className="main section">

        <h2 className='logo'>logo</h2>

        <FaTwitter className='social-icon'/>
        <BsFacebook className='social-icon'/>
        <BsInstagram className='social-icon'/>

        <p>ENJOY SHOPPING</p>
        
        <a href="mailto:mikelhfzy@gmail.com" className='butn'>E-MAIL US</a>
        <p>&copy; 2023 </p>
      </div>
      <div className="right section">
        <a href="">SIPPING INFO</a>
        <a href="">RETURN / EXCHANGE</a>
        <a href="">CONTACT</a>
      </div>
    </footer>
  )
}

export default Footer
