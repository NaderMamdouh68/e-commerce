import React from 'react'
import {Link, link} from 'react-router-dom'
import './userlist.css'
import {DeleteOutline} from '@mui/icons-material'
import { DataGrid, renderActionsCell } from '@mui/x-data-grid';
import Avatar from "@mui/material/Avatar";
import { userrows } from '../../../dummyData/dummyData';

const UesrList = () => {
  const handleDelete =() =>{
    console.log("ok")
  }
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "User",
      width: 100,
    },
    {
      field: 'avatar',
      headerName: 'avatar',
      width: 60,
      editable: true,
      renderCell: (params) => <Avatar src={params.value}/> // renderCell will render the component
    },
    { 
      field: "email",
      headerName: "E-mail",
      width: 150
    },
    {
      field: "status",
      headerName: "Status",
      width: 90
    },
    {
      field: "phone",
      headerName: "phone",
      width: 150
    },
    {
      field: "actions",
      headerName: "actions",
      width: 150,
      renderCell:(params)=>{
        return(
        <>
          <Link to={"/user/"+params.row.id}>
            <button className='edit'>Edit</button>
          </Link>
          
          <DeleteOutline className='delete' onClick={handleDelete}/>
        </>
        )
      }
    }

  ];
  
  const rows = [
    { id: 1, 
    username: 'Harry Potter',
    avatar:"https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png", 
    email:"Harry@gmail.com", 
    status:"Active",
    phone: '01124354678',
    },
  ];


  return (
    <div className="userList">
    <DataGrid rows={userrows} columns={columns} pageSize={20} disableRowSelectionOnClick rowsPerPageOptions={[5]} checkboxSelection />
    </div>
  )
}

export default UesrList