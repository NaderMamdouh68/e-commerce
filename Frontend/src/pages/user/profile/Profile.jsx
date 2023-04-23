import React from 'react'
import './profile.css'

function Profile() {

  const url = "https://previews.123rf.com/images/yupiramos/yupiramos1610/yupiramos161007352/64369849-young-man-avatar-isolated-icon-vector-illustration-design.jpg"

  return (
    <div className='profile'>
      <h1>wellcome user</h1>
      <div className="user-prof">
        <div className="prof-img-cont">
          <img src={url} alt="" className='user-prof-image' />
        </div>
        <span className='user-name'>name</span>
        <span className='user-phone'>01#########</span>
      </div>
      <div className="history">
        <h1>history</h1>
        <div className="orders-cont">
          <div className="order">
            <div className="oreder-img">
              <img src={require('../../../assits/prodect-16.jpg')} alt="" />
            </div>
            <div className="name">name</div>
            <div className="date">20 11 2020</div>
          </div>
          <div className="order">
            <div className="oreder-img">
              <img src="" alt="" />
            </div>
            <div className="name">name</div>
            <div className="date">20 11 2020</div>
          </div>
          <div className="order">
            <div className="oreder-img">
              <img src="" alt="" />
            </div>
            <div className="name">name</div>
            <div className="date">20 11 2020</div>
          </div>
          <div className="order">
            <div className="oreder-img">
              <img src="" alt="" />
            </div>
            <div className="name">name</div>
            <div className="date">20 11 2020</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile