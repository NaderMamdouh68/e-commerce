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
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/product/productUserOrder', {
      headers: {
        authorization : localStorage.getItem('token'),
      }
    }).then((response) => {
        setOrders(response.data)
    }).catch((err) => {console.log(err)})

    axios.get('http://localhost:5000/user/userProfile', {
      headers: {
        authorization : localStorage.getItem('token'),
      }
    }).then((response) => {
        setUser(response.data)
    }).catch((err) => {console.log(err)})
  }, [])


  return (
    <>
      <div className='profile'>
        <div className="Cover_profile">
          <img src={require('../../../assits/cover.jpg')} alt="" srcset="" />
          <FaExpand
            type="button"
            className="btnEye"
            onClick={() => setVisible(true)}
          />
        </div>
        <div className="Image_Profile">
          <img src="https://i.pravatar.cc/40?img=2" alt="" srcset="" />
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
              const date = order.order_date.split('T')[0]
              if(order.waiting===1){
              return (
                <div className="order" key={index}>
                  <div className="image">
                    <img src={`http://localhost:5000/${order.image}`} alt="" />
                  </div>
                  <div className="count_data">
                    <span>{order.product_name}</span>
                    <span>{date}</span>
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
              const date = order.order_date.split('T')[0]
              if(order.waiting===0){
              return (
                <div className="order" key={index}>
                  <div className="image">
                    <img src={`http://localhost:5000/${order.image}`} alt="" />
                  </div>
                  <div className="count_data">
                    <span>{order.product_name}</span>
                    <span>{date}</span>
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
        open={Visible}
        onHide={() => setVisible(false)}
        className="DialogContanet"
      >
        <div className="conImage">
          <img
            src=""
            alt="card__image"
            className="DialogImage"
            lazy="loading"
          />
          <FaRegTimesCircle
            type="button"
            className="btnClose"
            onClick={() => setVisible(false)}
          />
          <div className="card__footer card__footerDialog">
            <div className="user">
              <img
                src={`https://i.pravatar.cc/40?img=5`}
                alt="user__image"
                className="user__image"
              />
              <div className="user__info">
                <h5 className="authorName">
                  ssss
                </h5>
                <small>
                  ssss
                </small>
              </div>
            </div>
          </div>

        </div>
        <div className="ContanetDialog">
          <h4>
            sss
          </h4>
          <div><span>description</span><p>ssss</p></div>
          <div><span>content</span><p>ssss</p></div>

        </div>
        <a href="#" target="_blank" rel="noopener noreferrer">Go To Source</a>
      </dialog>
    </>
  )
}

export default Profile