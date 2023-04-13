/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import FeaturedInfo from '../../../components/featuredInfo/FeaturedInfo'
import './home.css'
import axios from 'axios';
const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/user', {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    }).then(res => setUsers(res.data))
      .catch(err => console.log(err))

  }, [])

  const lastpUsers = users.slice(-5);


  return (
    <div className='home'>
      <FeaturedInfo />
      <div className="last-added">
        <h3>Active Users</h3>
        <div className="last">
          {lastpUsers.map((user) => {
            if (user.status) {
              return (
                <div className="product-card">
                  <img src="https://previews.123rf.com/images/yupiramos/yupiramos1610/yupiramos161007352/64369849-young-man-avatar-isolated-icon-vector-illustration-design.jpg" alt="" />
                  <p>{user.user_name}</p>
                </div>
              )
            }
          })
          }
        </div>
      </div>
    </div>
  )
}

export default Home