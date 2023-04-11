import React from 'react'
import './dashboard.css'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'


const Dashboard = () => {

  if(localStorage.getItem('type') === 'user' || !localStorage.getItem('token')){
    return window.location.href = '/login'
  }
  
  return (
    <div className='Dashboard'>
      <div className='slidec'>
           <Sidebar/>
      </div>
       <div className="otherpages">
         <Topbar  />
         <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard