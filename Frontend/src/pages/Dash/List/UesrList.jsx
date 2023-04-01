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
          return(
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>{user.email}</td>
              <td className='actions'>
                <Link  to={`/dashboard/manageUsers/readu/${user.id}`} className='edit'>show</Link>
                <Link to={`/dashboard/manageUsers/edituser/${user.id}`}  className='edit'>edit</Link>
                <DeleteOutline className='delete'/>
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