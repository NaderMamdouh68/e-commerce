import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './create.css'
const CreateCategory = () => {
    const [errors, setErrors] = useState()

    const [values, setValues] = useState({
        category_name:"",
        title:"",
        description:"",
    })
    const nvigate =useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:5000/category/categorycreate', values, {
            headers: {
                authorization: localStorage.getItem('token'),
            }
        })
        .then(res => {
            console.log(res);
            nvigate('/dashboard/manageCategories')
        })
        .catch(err => {console.log(err)
            setErrors(err.response.data.errors)
        })
    }

  return (
    <div>
    <div className='editu'>
        <h2 className='table-title'>Create New Category</h2>
        <form onSubmit={handleSubmit}>
            <div className="inputcontainer">
            <label htmlFor='category_name'>category_name</label>
            <input type="text" name='category_name'
                onChange={e=> setValues({...values, category_name: e.target.value})}
            />
            </div>
            <div className="inputcontainer">
            <label htmlFor='title'>title</label>
            <input type="text" name='title'
                onChange={e=> setValues({...values, title: e.target.value})}
            />
            </div>
            <div className="inputcontainer">
            <label htmlFor='description'>description</label>
            <input type="text" name='description'
                onChange={e=> setValues({...values, description: e.target.value})}
            />
            </div>
            <button className='editbtn'>submit</button>
        </form>
        
    </div>
    {errors && errors.map((error, index) => (
        <h1 key={index} className='error'>
          {error.msg}
        </h1>
      ))}
      </div>
  )
}

export default CreateCategory