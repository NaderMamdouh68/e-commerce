/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {BsFacebook, BsInstagram} from 'react-icons/bs'

import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="left section">
        <h1>Team Member</h1>
        <p>Nader Mamdouh</p>
        <p>Mohamed Anwer</p>
        <p>micheal Anwer</p>
        <p>Omnia abdelatef</p>
        <p>Mina Wade3</p>
        <p>Hosam Gamel</p>
      </div>
      <div className="main section">

      <h1 className="mian-logo">BLACK <span>SHOPPING</span></h1>

        <FaTwitter className='social-icon'/>
        <BsFacebook className='social-icon'/>
        <BsInstagram className='social-icon'/>

        <p>ENJOY SHOPPING</p>
        
        <a href="mailto:nadermamdouh68@gmail.com" className='butn'>E-MAIL US</a>
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
