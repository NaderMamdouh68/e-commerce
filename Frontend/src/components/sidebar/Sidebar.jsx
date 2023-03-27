import './sidebar.css'
import { AccountCircleOutlined, Category, Feedback, LineStyle, Mail, Storefront, Timeline } from '@mui/icons-material'

import React from 'react'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className='sidebarIcon'/>
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon'/>
              Analytics
            </li>
          </ul>
        </div>


        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Control</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <AccountCircleOutlined className='sidebarIcon'/>
              <a href="/dashboard/manageUsers">users</a>
            </li>
            <li className="sidebarListItem">
              <Storefront className='sidebarIcon'/>
              Products
            </li>
            <li className="sidebarListItem">
              <Category className='sidebarIcon'/>
              Categories
            </li>
          </ul>
        </div>


        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Feedback className='sidebarIcon'/>
              Feedback
            </li>
            <li className="sidebarListItem">
              <Mail className='sidebarIcon'/>
              Mail
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar