import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './dashboard.css'
const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <div className='slidec'>
           <Sidebar/>
      </div>
       <div className="otherpages">
         <Topbar/>
         <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard