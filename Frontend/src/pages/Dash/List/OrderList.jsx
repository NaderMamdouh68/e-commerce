import React, { useEffect , useState} from 'react'
import {Link} from 'react-router-dom'
import './userlist.css'

import axios from 'axios';

const OrderList = () => {
  const [data, setData] =useState([])
  useEffect(()=>{
      axios.get('http://localhost:5000/product/productorder',{
        headers: {
        authorization : localStorage.getItem('token'),
      },
    })
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  },
 []
  )


  return (
    <div className="userList">
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
          {/* <th>action</th> */}
        </tr>
      </thead>
      <tbody>
        {data.map((order, index) =>{
          return(
            <tr key={index}>
              <td>{order.order_id}</td>
              <td>{order.quantity}</td>
              <td>{order.user_name}</td>
              <td>{order.product_name}</td> 
              <td>{order.order_date}</td>
              {/* <td className='actions'>
                <Link  to={`/dashboard/manageorder/reado/${order.order_id}`} className='editbtn'>show</Link>
                <Link  to={`/dashboard/manageorder/editorder/${order.order_id}`} className='editbtn'>Edit</Link>
                <DeleteOutline onClick={() => handleDelete (order.order_id)} className='delete'/>
              </td> */}
            </tr>
          )
        }
        )}
      </tbody>
    </table>
      </div>

    </div>
  )
}





export default OrderList

