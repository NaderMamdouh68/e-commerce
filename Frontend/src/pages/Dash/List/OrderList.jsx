import React, { useEffect , useState} from 'react'
import {Link} from 'react-router-dom'
import './userlist.css'
import { DeleteOutline } from '@mui/icons-material'

import axios from 'axios';

const OrderList = () => {
  const [data, setData] =useState([])
  useEffect(()=>{
      axios.get('http://localhost:5000/order/orderall',{
        headers: {
          authorization : localStorage.getItem('token'),
      },
    })
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  },
 []
  )
  const handleAccept = (id) => {
    axios.put(`http://localhost:5000/order/acceptorder/${id}`,id,{
      headers: {
        authorization : localStorage.getItem('token'),

      },
    })
    .then(res => 
      window.location.reload(alert('Order Accepted!')),
      )
    .catch(err => console.log(err))
  }
  


  return (
    <div className="userlist">
      <h2 className='table-title'>Orders List</h2>
      <div>
      </div>
      <div className="tableContainer">
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>quantity</th>
          <th>user_name</th>
          <th>product_name</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((order, index) =>{
          const dateorder = order.order_date.split('T')[0]
          if(order.waiting === 1){
          return(
            <tr key={index}>
              <td>{order.order_id}</td>
              <td>{order.quantity}</td>
              <td>{order.user_name}</td>
              <td>{order.product_name}</td> 
              <td>{dateorder}</td>
              
            </tr>
          )
        }
        }
        )}
      </tbody>
    </table>
      </div>

    </div>
  )
}





export default OrderList

