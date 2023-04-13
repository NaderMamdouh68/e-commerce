/* eslint-disable no-restricted-globals */
import './sidebar.css'
import { useState } from 'react'
import { AccountCircleOutlined, AddShoppingCart, Category, Feedback, LineStyle, Logout, Mail, Storefront, Timeline } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Sidebar = () => {

  const [active, setActive] = useState('#home')

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
    <div className='Sidebar'>
      {/* <div className="sidebarWrapper">
     


        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Control</h3>
          <ul className="sidebarList">
            <div onClick={() => setActive('#users')} className={active === '#users' ? 'active' : ''}>
              <li className="sidebarListItem ">
                <Link className={"sidebarlink"} to="/dashboard/manageUsers">
                  <AccountCircleOutlined />
                  users
                </Link>
              </li>
            </div>
            <div onClick={() => setActive('#Products')} className={active === '#Products' ? 'active' : ''}>
              <li className="sidebarListItem">
                <Link className={"sidebarlink"} to="/dashboard/manageProducts">
                  <Storefront className={'sidebarIcon'} />
                  Products
                </Link>
              </li>
            </div>
            <div onClick={() => setActive('#Categories')} className={active === '#Categories' ? 'active' : ''}>
              <li className={"sidebarListItem"}>
                <Link className={"sidebarlink"} to="/dashboard/manageCategories">
                  <Category />
                  Categories
                </Link>
              </li>
            </div>
            <div onClick={() => setActive('#order')} className={active === '#order' ? 'active' : ''}>
              <li className={"sidebarListItem"}>
                <Link className={"sidebarlink"} to="/dashboard/manageOrders">
                  <AddShoppingCart className='sidebarIcon' />
                  orders
                </Link>
              </li>
            </div>
          </ul>
        </div>


        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <div onClick={() => setActive('#Feedback')} className={active === '#Feedback' ? 'active' : ''}>
              <li className="sidebarListItem ">
                <Feedback className='sidebarIcon' />
                Feedback
              </li>
            </div>
            <div onClick={handleLogOut} className={active === '#Mail' ? 'active' : ''}>
              <li className="sidebarListItem">
                <Mail className='sidebarIcon' />
                Log Out
              </li>
            </div>
          </ul>
        </div>
      </div> */}
      <div className="sidebar-wrapper">
        <h2 className='title'>
          Dashboard
        </h2>
        <div className="sidebar-menu">
          <ul>
            <li onClick={() => setActive('#home')} className={active === '#home' ? 'active' : ''}>
            <Link to='/dashboard' className={"sidebarlink"} >
                  <LineStyle />
                    Home
                  </Link>
            </li>

            <li onClick={() => setActive('#analtic')} className={active === '#analtic' ? 'active' : ''}>
              <Link to='/dashboard/analytics' className={"sidebarlink"} >
              <Timeline  />
                  Analytics
              </Link>
            </li>
          </ul>
        </div>



        <div className="sidebar-menu">
        <ul>
            <h3>control</h3>
            <li onClick={() => setActive('#user')} className={active === '#user' ? 'active' : ''}>
              <Link to='/dashboard/manageUsers' className={"sidebarlink"} >
                <AccountCircleOutlined />
                users
              </Link>
            </li>

            <li onClick={() => setActive('#product')} className={active === '#product' ? 'active' : ''}>
              <Link to='/dashboard/manageProducts' className={"sidebarlink"} >
                <Storefront />
                Products
              </Link>
            </li>
            <li onClick={() => setActive('#Category')} className={active === '#Category' ? 'active' : ''}>
              <Link to='/dashboard/manageCategories' className={"sidebarlink"} >
                <Category />
                Categories
              </Link>
            </li>
            <li onClick={() => setActive('#order')} className={active === '#order' ? 'active' : ''}>
              <Link to='/dashboard/manageOrders' className={"sidebarlink"} >
                <AddShoppingCart className='sidebarIcon' />
                orders
              </Link>
            </li>
          </ul>
        </div>



        <div className="sidebar-menu">
        <h3>Notifications</h3>
          <ul>
            <li onClick={() => setActive('#feedback')} className={active === '#feedback' ? 'active' : ''}>
              <Link to='/dashboard/feedback' className={"sidebarlink"} >
                <Feedback className='sidebarIcon' />
                Feedback
              </Link>
            </li>

            <li onClick={() => setActive('#mail')} className={active === '#mail' ? 'active' : ''}>
              <Link to='/dashboard' className={"sidebarlink"} >
              <Mail  />
                  E-mail
              </Link>
            </li>
          </ul>
        </div>
        <button className="editbtn logout" onClick={handleLogOut}>
          <Logout />logout
        </button>
      </div>
    </div>
  )
}





export default Sidebar




