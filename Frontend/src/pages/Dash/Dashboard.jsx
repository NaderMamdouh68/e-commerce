import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './dashboard.css'
import Home from './dashHome/Home'
const dashboard = () => {
  return (
    <div>
        {/* <Topbar/> */}
        <div className="containerr">
          <Sidebar/>
          <div className="otherpages">
            <Topbar/>
          <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default dashboard