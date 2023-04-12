/* eslint-disable no-restricted-globals */
import React, { useEffect , useState} from 'react'
import {Link} from 'react-router-dom'
import './userlist.css'
import {DeleteOutline} from '@mui/icons-material'

import axios from 'axios';

const CategoryList = () => {

  const [data, setData] =useState([])
  useEffect(()=>{
      axios.get('http://localhost:5000/category',{
        headers: {
        authorization : localStorage.getItem('token'),
      },
    })
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  },
 []

  
 
  )

  const handleDelete =(id) =>{
    const conf = confirm('Are you sure you want to delete this category?')
    if (conf === true) {
      axios.delete('http://localhost:5000/category/categorydelete/'+id,{
        headers: {
          authorization : localStorage.getItem('token'),
        },
      })

      .then((res) => {
        console.log(res)
        window.location.reload();
      })
      
      .catch(err => console.log(err))
    }
      
  }  
  return (
    <div className="userlist">
      <h2 className='table-title'>Category List</h2>
      <div>
        <Link to="/dashboard/manageCategories/createCategory" className='editbtn crbtn'>Create +</Link>
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
                <Link  to={`/dashboard/manageCategories/readc/${category.category_id}`} className='editbtn'>show</Link>
                <Link  to={`/dashboard/manageProducts/${category.category_id}`} className='editbtn'>show Product</Link>
                <Link to={`/dashboard/manageCategories/editcategory/${category.category_id}`}  className='editbtn'>edit</Link >
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