import React, { useEffect , useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import './userlist.css'
import {DeleteOutline} from '@mui/icons-material'
// import { DataGrid, renderActionsCell } from '@mui/x-data-grid';
// import Avatar from "@mui/material/Avatar";
import axios from 'axios';

const ProductList = () => {
  const [data, setData] =useState([])
  const {id} = useParams();

  useEffect(()=>{
    if(id){
      axios.get('http://localhost:5000/products/productfilter/'+id)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
      }else{
        axios.get('http://localhost:5000/products')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
      }
  },
 [id]
  )

  const handleDelete =(id) =>{
    alert('Are you sure you want to delete this product?')
    axios.delete('http://localhost:5000/products/productsdelete/'+id)
    .then(res => {
       window.location.reload();
    })
    .catch(err => console.log(err))
}

const imgname = 'download.jpeg'

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
      <h2 className='table-title'>Product List</h2>
      <div>
        <Link to="/dashboard/manageProducts/createProduct" className='edit'>Create +</Link>
      </div>
      
      <div className="tableContainer">
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>product_name</th>
          <th>Image</th>
          <th>price</th>
          <th>description</th>
          <th>category_name</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product, index) =>{
          return(
            <tr key={index}>
              <td>{product.product_id}</td>
              <td>{product.product_name}</td>
              <td ><img className='product-img' src={require(`../../../images/${imgname}`)} alt=""  /></td>
              <td>{product.price}</td> 
              <td>{product.description}</td>
              <td>{product.category_name}</td>
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





export default ProductList