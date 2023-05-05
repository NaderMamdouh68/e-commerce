/* eslint-disable array-callback-return */
import React, { useEffect , useState} from 'react'
import './userlist.css'

import axios from 'axios';

function RequestList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/order/orderall', {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  },
    []
  );
  const handleAccept = (id) => {
    axios.put(`http://localhost:5000/order/acceptorder/${id}`, id, {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then(res => window.location.reload(alert('Order Accepted!'))
      )
      .catch(err => console.log(err));
  };
  const handleRefuse = (id) => {
    axios.put(`http://localhost:5000/order/rejectorder/${id}`, id, {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then(res => alert(res.data.msg)
      )
      .catch(err => console.log(err));
  };
  



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
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order, index) => {
              if (order.waiting === 0) {
                return (
                  <tr key={index}>
                    <td>{order.order_id}</td>
                    <td>{order.quantity}</td>
                    <td>{order.user_name}</td>
                    <td>{order.product_name}</td>
                    <td>{order.order_date}</td>
                    <td className='actions'>

                      <button className='editbtn' onClick={() => handleAccept(order.order_id)}>Accept</button>
                      <button className='editbtn delete1' onClick={() => handleRefuse(order.order_id)}>Refuse</button>
                      {/* <Link  to={`/dashboard/manageorder/reado/${order.order_id}`} className='editbtn'>Accept</Link>
                            <Link  to={`/dashboard/manageorder/editorder/${order.order_id}`} className='editbtn delete'>Refuse</Link> */}
                    </td>
                  </tr>
                );
              }
            }
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}





export default RequestList

