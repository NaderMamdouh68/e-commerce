import React from 'react'
import './dashboard.css'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Home from './dashHome/Home'
import { useLocation } from 'react-router-dom'

const dashboard = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const location = useLocation();
  // const userdate = location.state.userdate
  
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

export default dashboard