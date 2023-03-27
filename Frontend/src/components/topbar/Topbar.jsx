import React from 'react'
import './topbar.css'
import {NotificationsNone, Settings} from '@mui/icons-material';
const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarwrapper">
            <div className="topleft">
                <span className="logo">
                    logo
                </span>
            </div>
            <div className="topright">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className='topIconBadge'>2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img  className='avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbM1sKRHlT8AroSFkNAmAT4fCrvcBOqCUXX_e1YF45ZjkBnqYDKz7AmqZblmAlZALabY&usqp=CAU" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Topbar