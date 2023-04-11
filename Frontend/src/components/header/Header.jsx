/* eslint-disable no-restricted-globals */
import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import axios from 'axios'

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
    <div>
        <nav>
            <h2>logo</h2>
            <ul className='nav-icons'>
                <li><Link>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Contact us</Link></li>
                <li><button onClick={handleLogOut} >logout</button></li>

            </ul>
        </nav>
    </div>
  )
}

export default Header