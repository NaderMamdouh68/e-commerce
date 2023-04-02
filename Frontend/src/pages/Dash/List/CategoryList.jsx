import React, { useEffect , useState} from 'react'
import {Link} from 'react-router-dom'
import './userlist.css'
import {DeleteOutline} from '@mui/icons-material'
// import { DataGrid, renderActionsCell } from '@mui/x-data-grid';
// import Avatar from "@mui/material/Avatar";
import axios from 'axios';

const CategoryList = () => {

  const [data, setData] =useState([])
  useEffect(()=>{
      axios.get('http://localhost:5000/categories')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  },
 []

  
 
  )

  const handleDelete =(id) =>{
    alert('Are you sure you want to delete this category?')
      axios.delete('http://localhost:5000/categories/categorydelete/'+id)
      .then((res) => {
        console.log(res)
        window.location.reload();
      })
      
      .catch(err => console.log(err))

      
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
      <h2 className='table-title'>Category List</h2>
      <div>
        <Link to="/dashboard/manageCategories/createCategory" className='edit'>Create +</Link>
      </div>
      <div className="tableContainer">
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Title</th>
          <th>Description</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((category, index) =>{
          return(
            <tr key={index}>
              <td>{category.category_id}</td>
              <td>{category.category_name}</td>
              <td>{category.title}</td>
              <td>{category.description}</td>
              <td className='actions'>
                <Link  to={`/dashboard/manageCategories/readc/${category.category_id}`} className='edit'>show</Link>
                <Link  to={`/dashboard/manageProducts/${category.category_id}`} className='edit'>show Product</Link>
                <Link to={`/dashboard/manageCategories/editcategory/${category.category_id}`}  className='edit'>edit</Link >
                <DeleteOutline onClick={() => handleDelete (category.category_id)} className='delete'/>
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

export default CategoryList