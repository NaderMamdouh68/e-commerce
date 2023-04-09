/* eslint-disable no-restricted-globals */
import './sidebar.css'
import { useState } from 'react'
import { AccountCircleOutlined, AddShoppingCart, Category, Feedback, LineStyle, Mail, Storefront, Timeline } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const [active, setActive] = useState('#home')

  const handleLogOut = () => {
    const conf = confirm('Are you sure you want to log out?', 'Log out')
    if (conf === true) {
      localStorage.removeItem('token')
      localStorage.removeItem('type')
      window.location.reload()
    }
  }



  return (
    <div className='Sidebar'>
      <div className="sidebarWrapper">
        <div className="logo">
          <h1>Dashbord</h1>
        </div>
        <div className="sidebarmenu">
          <ul className="sidebarList">
            <div onClick={() => setActive('#home')} className={active === '#home' ? 'active' : ''}>
              <li className="sidebarListItem ">
                <Link to='/dashboard' className={"sidebarlink"} >
                  <LineStyle />
                  Home
                </Link>
              </li>
            </div>
            <div onClick={() => setActive('#Analytics')} className={active === '#Analytics' ? 'active' : ''}>
              <li className="sidebarListItem">
                <Link to="/dashboard/analytics" className={"sidebarlink"}>
                  <Timeline className='sidebarIcon' />
                  Analytics
                </Link>
              </li>
            </div>
          </ul>
        </div>


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
      </div>
    </div>
  )
}





export default Sidebar




