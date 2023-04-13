/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './edituser.css'

const Editcategory = () => {

  const {id} = useParams();
  const navigate = useNavigate()
  const [errors, setErrors] = useState()
  const [values, setValues] = useState({
    category_name: '',
    title: '',
    description: '',
    
  })
  useEffect(()=>{
    axios.get('http://localhost:5000/category/categorydetails/'+id)
    .then(res =>{
        console.log(res)
        setValues({...values,
          category_name: res.data[0].category_name,
          title: res.data[0].title,
          description: res.data[0].description,
          
        })
    })
    .catch(err => console.log(err))
    
   // eslint-disable-next-line no-use-before-define
   }, [id]) 



  const handleUpdate = (event)=>{
    event.preventDefault()
    axios.put('http://localhost:5000/category/categoryupdate/'+id, values, {
      headers: {
        authorization: localStorage.getItem('token'),
      }
    })
    .then(res =>{
      console.log(res);
      navigate('/dashboard/manageCategories')
    }
    )
    .catch (err => {
      console.log(err.response.data.errors)
      setErrors(err.response.data.errors)
    })
  }





  return (
    <div>
          <div className='editu'>
          
        <h2 className='table-title'>update Category</h2>
        <form onSubmit={handleUpdate}>
            <div className='inputcontainer'>
            <label htmlFor='category_name'>category_name</label>
            <input
              type="text"
              name='category_name'
              value={values.category_name}
              onChange={e=> setValues({...values, category_name: e.target.value})}
            />
            </div>
            <div className='inputcontainer'>
            <label htmlFor='title'>Title</label>
            <input
              type="text"
              name='title'
              value={values.title}
              onChange={e=> setValues({...values, title: e.target.value})}
            />
            </div>
            <div className='inputcontainer'>
            <label htmlFor='description'>Description</label>
            <input
              type="text"
              name='description'
              value={values.description}
              onChange={e=> setValues({...values, description: e.target.value})}
            />
            </div>
            <button className='editbtn'>Edit</button>
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

export default Editcategory