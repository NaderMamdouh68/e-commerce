import React, { useEffect , useState} from 'react'
import './analytics.css'
import axios from 'axios';




const Analytics = () => {

  
  const [userdata, setUserData] =useState([])
  const [productdata, setProductrData] =useState([])
  const [orderdata, setOrderData] =useState([])


  useEffect(()=>{
    axios.get('http://localhost:5000/user', {
      headers: {
        authorization : localStorage.getItem('token'),
      },
    })
      .then(res => setUserData(res.data))
      .catch(err => console.log(err))
    axios.get('http://localhost:5000/product/productallorder', { 
      headers: {
        authorization : localStorage.getItem('token'),
      },
    })
      .then(res => setOrderData(res.data))
      .catch(err => console.log(err))
    axios.get('http://localhost:5000/product')
      .then(res => setProductrData(res.data))
      .catch(err => console.log(err))
  },
  []
  )
  
  const [products, setProducts]= useState([])
  const [orders, setOrders]= useState([])
  const [users, setUsers]= useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/product').then(res => setProducts(res.data))
      .catch(err => console.log(err))

      .catch(err => console.log(err))
    axios.get('http://localhost:5000/product/productallorder', {
      headers: {
        authorization : localStorage.getItem('token'),
      },
    }).then(res => setOrders(res.data))
      .catch(err => console.log(err))
    
    axios.get('http://localhost:5000/user', {
      headers: {
        authorization : localStorage.getItem('token'),
      },
    }).then(res => setUsers(res.data))
      .catch(err => console.log(err))

  }, [])


  const lastproducts = products.slice(-5);
  const lastOrders = orders.slice(-5);
  const lastpUsers = users.slice(-5);
  

  return (
    <div className="analytics">
      <div className='featured'>
            <div className="featuredItem">
              <span className="featuredTitle">Users</span>
              <span className='num'>{userdata.length}</span>
            </div> 

            <div className="featuredItem">
            <span className="featuredTitle">Orders</span>
            <span className='num'>{orderdata.length}</span>
            </div> 

            <div className="featuredItem">
            <span className="featuredTitle">Products</span>
            <span className='num'>{productdata.length}</span>
            </div> 
      </div>

      
      <div className="last-added">
        <h3>last added products</h3>
        <div className="last">
          {lastproducts.map((product)=>{
            return(
              <div className="product-card">
                <img src={(`http://localhost:5000/${product.image}`)} alt="" />
                <p>{product.product_name}</p>
              </div>
            )  
          })
          }
        </div>
        </div>
        <hr/>

      <div className="last-added">
        <h3>Last Added Orders</h3>
        <div className="last">
          {lastOrders.map((order)=>{
            return(
              <div className="product-card">
                <img src={(`http://localhost:5000/${order.image}`)} alt="" />
                <p>{order.product_name}</p>
                <p>{order.user_name}</p>
              </div>
            )  
          })
          }
        </div>
        </div>
        <hr/>

      <div className="last-added">
        <h3>last Signup Users</h3>
        <div className="last">
          {lastpUsers.map((user)=>{
            return(
              <div className="product-card">
                <img src="https://previews.123rf.com/images/yupiramos/yupiramos1610/yupiramos161007352/64369849-young-man-avatar-isolated-icon-vector-illustration-design.jpg" alt="" />
                <p>{user.user_name}</p>
              </div>
            )  
          })
          }
        </div>
        </div>

       
    </div>
  )
}

export default Analytics