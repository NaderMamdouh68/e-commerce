import React, { useEffect , useState} from 'react'
import axios from 'axios'
import './userlist.css'

const FeedbackList = () => {

    const [data, setData] =useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/product/productallfeedback',{
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
    <div className="userlist">
      <h2 className='table-title'>Feedback List</h2>
      <div>
      </div>
      <div className="tableContainer">
      <table>
      <thead>
        <tr>
          <th>ID</th>

          <th>User</th>
          <th>Product</th>
          <th>Comment</th>
          {/* <th>action</th> */}
        </tr>
      </thead>
      <tbody>
        {data.map((feedback, index) =>{
          return(
            <tr key={index}>
              <td>{feedback.feedback_id}</td>
              <td>{feedback.user_name}</td>
              <td>{feedback.product_name}</td>
              <td>{feedback.comment}</td>
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

export default FeedbackList