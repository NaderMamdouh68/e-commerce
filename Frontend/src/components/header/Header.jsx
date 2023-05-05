/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-globals */
import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import axios from 'axios'
import { TiShoppingCart } from 'react-icons/ti'
import { BiDollarCircle } from "react-icons/bi";
import { FaRegTimesCircle } from "react-icons/fa";


const Header = () => {
  const [sticky, setSticky] = useState(false)
  const [categories, setCategorries] = useState([])
  const [Visible, setVisible] = useState(false);
  const [orders, setOrders] = useState([]);
  let total = 0;
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  window.addEventListener('scroll', handleScroll)
  const handleCancel = () => {
    if (Visible) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  };

  const handleLogOut = () => {
    axios.get('http://localhost:5000/authentication/logout', {
      headers: {
        authorization: localStorage.getItem('token'),
      }
    })
    const conf = confirm('Are you sure you want to log out?', 'Log out')
    if (conf === true) {
      localStorage.removeItem('token')
      localStorage.removeItem('type')
      window.location.reload()
    }
  }
  useEffect(() => {
    axios.get('http://localhost:5000/category')
      .then(res => setCategorries(res.data))
      .catch(err => console.log(err))
  }, [])

  const lastCategories = categories.slice(-5);

  useEffect(() => {
    axios.get('http://localhost:5000/order/showUserOrder', {
      headers: {
        authorization: localStorage.getItem('token'),
      }
    }).then((response) => {
      setOrders(response.data)
    }).catch((err) => { console.log(err) })
  }, [])






  return (
    <>
      <div>
        <div className={sticky ? " headerApp sticky " : 'headerApp'}>
          {/* <nav>
        <ul className='nav-icons'>
          <li><Link className='link-header' to="/">Home</Link></li>
          <li><Link className='link-header' to='/about'>About</Link></li>
          <li><Link className='link-header' to="/products">Our Products</Link></li>
          <li><Link className='link-header' to="/products">Our Categories</Link></li>
        </ul>
      </nav> */}
          <nav>
            {
              localStorage.getItem('token') ?
                (
                  <div className="reer">
                    <div className='login-btn' onClick={handleLogOut} >LOG-OUT</div>
                  </div>
                ) :
                (
                  <ul className='nav-icons'>
                    <li><BiDollarCircle className='link-header headericon' /></li>
                  </ul>
                )
            }
          </nav>

          <Link className='aa' to="/"><h1 className="mian-logo">BLACK <span>SHOPPING</span></h1></Link>


          {
            localStorage.getItem('token') ? (
              <div className="reer">
                <TiShoppingCart className='headericon' onClick={handleCancel} />
                <Link to="/profile"><img src="https://previews.123rf.com/images/yupiramos/yupiramos1610/yupiramos161007352/64369849-young-man-avatar-isolated-icon-vector-illustration-design.jpg" alt="" className='user-profile' /></Link>
              </div>
            ) : (
              <Link to="/login"><div className="reer">
                <div className='login-btn'>LOG-IN</div>
              </div></Link>
            )
          }

        </div>
        <div className="headerApp secheader" >
          <nav>
            <ul className='nav-icons'>

              {
                lastCategories.map((categories) => {
                  return (
                    <li><Link className='link-header' to={`/category/${categories.category_id}`}>{categories.category_name}</Link></li>

                  )
                })
              }
            </ul>

          </nav>

        </div>
      </div>
      <dialog
        className={Visible ? "DialogContanetcart" : "DialogContanetcartClose"}
      >
        
        <div className="ContanetDialogcart">
        <FaRegTimesCircle
          type="button"
          className="btnClose"
          onClick={handleCancel}
        />
          <div className="cart">
            {
              orders.map((order) => {
                if (order.waiting === 1) {
                  total += Number(order.price) * Number(order.quantity);
                  return (
                    <div className="cartItem">
                      <div className="cartItemImg">
                        <img src={`http://localhost:5000/${order.image}`} alt="" />
                      </div>
                      <div className="cartItemInfo">
                        <h3>{order.product_name}</h3>
                        <p>{order.price} $</p>
                        <p>Quantity : {order.quantity}</p>
                      </div>
                    </div>

                  )
                }
              })
            }

          </div>

          <div className="cartTotal">
            <h3>Total: {total}</h3>
            <button className='btn'>Checkout</button>
          </div>
        </div>


      </dialog>
    </>

  )
}

export default Header