
import React, { useEffect , useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import './userlist.css'
import {DeleteOutline} from '@mui/icons-material'
// import { DataGrid, renderActionsCell } from '@mui/x-data-grid';
// import Avatar from "@mui/material/Avatar";
import axios from 'axios';

const OrderList = () => {
  const [data, setData] =useState([])
  useEffect(()=>{
      axios.get('http://localhost:5000/products')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  },
 []
  )

  const handleDelete =(id) =>{
    alert('Are you sure you want to delete this product?')
    axios.delete('http://localhost:5000/productsdelete/'+id)
    .then(res => {
      window.location.reload();
    })
    .catch(err => console.log(err))
}
const {id} = useParams();

const handleSearch = (id) => {
  if(id){
  axios.get('http://localhost:5000/products/productfilter/'+id)
  .then(res => setData(res.data))
  .catch(err => console.log(err))
  }else{
    axios.get('http://localhost:5000/products')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }
}


  // const columns = [
  //   { field: "id", headerName: "ID", width: 70 },
  //   {
  //     field: "username",
  //     headerName: "User",
  //     width: 100,
  //   },
  //   {
  //     field: 'avatar',
  //     headerName: 'avatar',
  //     width: 60,
  //     editable: true,
  //     renderCell: (params) => <Avatar src={params.value}/> // renderCell will render the component
  //   },
  //   { 
  //     field: "email",
  //     headerName: "E-mail",
  //     width: 150
  //   },
  //   {
  //     field: "status",
  //     headerName: "Status",
  //     width: 90
  //   },
  //   {
  //     field: "phone",
  //     headerName: "phone",
  //     width: 150
  //   },
  //   {
  //     field: "actions",
  //     headerName: "actions",
  //     width: 150,
  //     renderCell:(params)=>{
  //       return(
  //       <>
  //         <Link to={"/user/"+params.row.id}>
  //           <button className='edit'>Edit</button>
  //         </Link>
          
  //         <DeleteOutline className='delete' onClick={handleDelete}/>
  //       </>
  //       )
  //     }
  //   }

  // ];
  return (
    <div className="userList">
      <h2>Orders List</h2>
      <div>
        <Link to="/dashboard/manageUsers/createProduct" className='edit'>Create +</Link>
      </div>
      <div>
        <input type="text" name="search" id="search" onChange={handleSearch(id)} hidden />
      </div>
      <div className="tableContainer">
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>order_name</th>
          {/* <th>Image</th> */}
          <th>user_name</th>
          <th>product_name</th>
          <th>date</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product, index) =>{
          return(
            <tr key={index}>
              <td>{}</td>
              <td>{}</td>
              {/* <td><img src={require('../../../../server/images/uploadProductImg/image_1680322113120.jpg')} alt="" srcset="" /></td>*/}
              <td>{}</td> 
              <td>{}</td>
              <td>{}</td>
              <td className='actions'>
                <Link  to={`/dashboard/manageProducts/readp/${product.product_id}`} className='edit'>show</Link>
                <Link  to={`/dashboard/manageProducts/editproduct/${product.product_id}`} className='edit'>Edit</Link>
                <DeleteOutline onClick={() => handleDelete (product.product_id)} className='delete'/>
              </td>
            </tr>
          )
        }
        )}
      </tbody>
    </table>
      </div>

    {/* <DataGrid rows={userrows} columns={columns} pageSize={20} disableRowSelectionOnClick rowsPerPageOptions={[5]} checkboxSelection /> */}
    </div>
  )
}





export default OrderList

