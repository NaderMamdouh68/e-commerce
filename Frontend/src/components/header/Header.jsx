import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div>
        <nav>
            <h2>logo</h2>
            <ul className='nav-icons'>
                <li><Link>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Contact us</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header