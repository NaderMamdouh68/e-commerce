import './sidebar.css'
import { AccountCircleOutlined, AddShoppingCart, Category, Feedback, LineStyle, Mail, Storefront, Timeline } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Link to='/dashboard'>
                <LineStyle className='sidebarIcon' />
                Home
              </Link>
            </li>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
          </ul>
        </div>


        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Control</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Link to="/dashboard/manageUsers">
                <AccountCircleOutlined className='sidebarIcon' />
                users
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/dashboard/manageProducts">
                <Storefront className='sidebarIcon' />
                Products
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/dashboard/manageCategories">
                <Category className='sidebarIcon' />
                Categories
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/dashboard/manageOrders">
                <AddShoppingCart className='sidebarIcon' />
                orders
              </Link>
            </li>
          </ul>
        </div>


        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Feedback className='sidebarIcon' />
              Feedback
            </li>
            <li className="sidebarListItem">
              <Mail className='sidebarIcon' />
              Mail
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}





export default Sidebar




