/* eslint-disable no-restricted-globals */
import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './header.css'
import axios from 'axios'
import { TiShoppingCart } from 'react-icons/ti'

const Header = () => {

  const handleLogOut = () => {
    axios.get('http://localhost:5000/authentication/logout',{
      headers: {
        authorization : localStorage.getItem('token'),
      }
    })
    const conf = confirm('Are you sure you want to log out?', 'Log out')
    if (conf === true) {
      localStorage.removeItem('token')
      localStorage.removeItem('type')
      window.location.reload()
    }
  }




  return (
    <div className='header'>
        <h1 className="mian-logo">Logo</h1>
        <nav>
            <ul className='nav-icons'>
                <li><Link  className='link-header' to="/">Home</Link></li>
                <li><Link className='link-header'  to='/about'>About</Link></li>
                <li><Link  className='link-header' to="/products">Our Products</Link></li>
                <li><Link  className='link-header' to="/products">Our Categories</Link></li>
            </ul>
        </nav>
        
        {
          localStorage.getItem('token')? (
            <div className="reer">
            <Link   to="/profile"><img src="https://previews.123rf.com/images/yupiramos/yupiramos1610/yupiramos161007352/64369849-young-man-avatar-isolated-icon-vector-illustration-design.jpg" alt="" className='user-profile'/></Link>
            <TiShoppingCart className='headericon'/>
            <div className='logout-btn' onClick={handleLogOut} >Log out</div>
            </div>
            ) :(
              <div className="reer">                
              <div className='logout-btn' ><Link to="/login">log-in</Link></div>
              </div>
            )
        }
        
    </div>
  )
}

export default Header