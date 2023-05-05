/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React from 'react'
import './profile.css'
import { AiOutlineHistory } from 'react-icons/ai'
import { FaExpand } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';


function Profile() {

  const [Visible, setVisible] = useState(false);
  const [orders, setOrders] = useState([]);

  const handleCancel = () => {
    if (Visible) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  };




  const [values, setValues] = useState({
    user_name: '',
    password: '',
    email: '',
    phonenumber: '',

  })

  useEffect(() => {
    axios.get('http://localhost:5000/order/showUserOrder', {
      headers: {
        authorization: localStorage.getItem('token'),
      }
    }).then((response) => {
      setOrders(response.data)
      console.log(response.data);
    }).catch((err) => { console.log(err) })

    axios.get('http://localhost:5000/user/userProfile', {
      headers: {
        authorization: localStorage.getItem('token'),
      }
    }).then((res) => {
      setValues({
        ...values,
        user_name: res.data.user_name,
        password: res.data.password,
        email: res.data.email,
        phonenumber: res.data.phonenumber,

      })
    }).catch((err) => { console.log(err) })
  }, [])

  const handleUpdate = (event) => {
    event.preventDefault()
    if (values.password === '') {
      delete values.password
    }
    axios.put('http://localhost:5000/user/userupdate/', values, {
      headers: {
        authorization: localStorage.getItem('token'),
      }
    })
      .then(res => {
        console.log(res);
      }
      )
      .catch(err => {
        console.log(err.response.data.errors)
      })
  }

  return (
    <>
      <div className='profile'>
        <div className="Cover_profile">
          <img src={require('../../../assits/cover.jpg')} alt="" srcset="" />
          <FaExpand
            type="button"
            className="btnEye"
            onClick={handleCancel}
          />
        </div>
        <div className="Image_Profile" onClick={handleCancel}>
          <img src="https://previews.123rf.com/images/yupiramos/yupiramos1610/yupiramos161007352/64369849-young-man-avatar-isolated-icon-vector-illustration-design.jpg" alt="" srcset="" />
        </div>
        {/* <aside className="Side_bar">
        <div className='prof-info'><AiOutlineUser className='prof-ico'/> <span>User name</span></div>
        <div className='prof-info'><BsTelephone className='prof-ico'/>  <span>01333333333</span></div>
        <div className='prof-info'><FiMail className='prof-ico'/>  <span></span></div>
      </aside> */}
        <div className="Show_produacts">
          <h1><AiOutlineHistory /> History</h1>
          <div className="order-cont">


            {orders.map((order, index) => {
              if (order.waiting === 1) {
                return (
                  <div className="order" key={index}>
                    <div className="image">
                      <img src={`http://localhost:5000/${order.image}`} alt="" />
                    </div>
                    <div className="count_data">
                      <span>{order.product_name}  </span>
                      {/* <span>  {date}</span> */}
                    </div>
                  </div>
                )
              }
            })
            }
          </div>
          <h1><AiOutlineHistory /> Waiting List</h1>
          <div className="order-cont">


            {orders.map((order, index) => {
              // const date = order.order_date.split('T')[0]
              if (order.waiting === 0) {
                return (
                  <div className="order" key={index}>
                    <div className="image">
                      <img src={`http://localhost:5000/${order.image}`} alt="" />
                    </div>
                    <div className="count_data">
                      <span>{order.product_name}  </span>
                      {/* <span>  {date}</span> */}
                    </div>
                  </div>
                )
              }
            })
            }
          </div>
        </div>
      </div>

      <dialog
        className={Visible ? "DialogContanet" : "DialogContanetClose"}
      >
        <FaRegTimesCircle
          type="button"
          className="btnClose"
          onClick={handleCancel}
        />
        <div className="conImage">
          <img
            src="https://previews.123rf.com/images/yupiramos/yupiramos1610/yupiramos161007352/64369849-young-man-avatar-isolated-icon-vector-illustration-design.jpg"
            alt="card__image"
            className="DialogImage"
            lazy="loading"
          />


        </div>
        <div className="ContanetDialog">


          <form className='profileform' onSubmit={handleUpdate}>
            <div className='inputcontainer'>
              <label htmlFor='category_name' className='profilelabel'>User_name</label>
              <input
                type="text"
                name='category_name'
                className='profileinput'
                value={values.user_name}
                onChange={e => setValues({ ...values, user_name: e.target.value })}
              />
            </div>
            <div className='inputcontainer'>
              <label htmlFor='title' className='profilelabel'>password</label>
              <input
                type="text"
                name='title'
                className='profileinput'
                value={values.password}
                onChange={e => setValues({ ...values, password: e.target.value })}
              />
            </div>
            <div className='inputcontainer'>
              <label htmlFor='description' className='profilelabel' >email</label>
              <input
                type="text"
                name='description'
                className='profileinput'
                value={values.email}
                onChange={e => setValues({ ...values, email: e.target.value })}
              />
            </div>
            <div className='inputcontainer'>
              <label htmlFor='description' className='profilelabel' >phonenumber</label>
              <input
                type="text"
                name='description'
                className='profileinput'
                value={values.phonenumber}
                onChange={e => setValues({ ...values, phonenumber: e.target.value })}
              />
            </div>
            <button className='btn'>Edit</button>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default Profile