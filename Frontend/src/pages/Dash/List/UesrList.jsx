import React, { useEffect , useState} from 'react'
import {Link} from 'react-router-dom'
import './userlist.css'
import {DeleteOutline} from '@mui/icons-material'
// import { DataGrid, renderActionsCell } from '@mui/x-data-grid';
// import Avatar from "@mui/material/Avatar";
import axios from 'axios';

const UesrList = () => {

  const [data, setData] =useState([])
  useEffect(()=>{
      axios.get('http://localhost:5000/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  },
 []
  )

const handleDelete =(id) =>{
  alert('Are you sure you want to delete this product?')
  axios.delete('http://localhost:5000/users/userdelete/'+id)
  .then(res => {
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
      <h2>Uesr List</h2>
      <div>
        <Link to="/dashboard/manageUsers/createu" className='edit'>Create +</Link>
      </div>
      <div className="tableContainer">
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>email</th>
          <th>phone</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) =>{
          // (user.status === 0) ? user.status = 'non-active' : user.status = 'active'
          return(
            <tr key={index}>
              <td>{user.user_id}</td>
              <td>{user.user_name}</td>
              <td>{(user.status)? 'active': 'non-active' } </td>
              <td>{user.email}</td>
              <td>{user.phonenumber}</td>
              <td className='actions'>
                <Link  to={`/dashboard/manageUsers/readu/${user.user_id}`} className='edit'>show</Link>
                <Link to={`/dashboard/manageUsers/edituser/${user.user_id}`}  className='edit'>edit</Link>
                <DeleteOutline onClick={() => handleDelete (user.user_id)} className='delete'/>
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

export default UesrList