import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './edituser.css'

const Editcategory = () => {

  const {id} = useParams();
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:5000/categories/categorydetails/'+id)
    .then(res =>{
        console.log(res)
        setValues({...values,
          category_name: res.data[0].category_name,
          title: res.data[0].title,
          description: res.data[0].description,
          
        })
    })
    .catch(err => console.log(err))
    
   }, [id]) 

  const [values, setValues] = useState({
    category_name: '',
    title: '',
    description: '',
    
  })

  const handleUpdate = (event)=>{
    event.preventDefault()
    axios.put('http://localhost:5000/categories/categoryupdate/'+id, values)
    .then(res =>{
      console.log(res);
      navigate('/dashboard/manageCategories')
    }
    )
    .catch (err => console.log(err))
  }





  return (
    <div>
          <div className='editu'>
          <div className='wrapper'>
        <h2>update User</h2>
        <form onSubmit={handleUpdate}>
            <>
            <label htmlFor='category_name'>category_name</label>
            <input
              type="text"
              name='category_name'
              value={values.category_name}
              onChange={e=> setValues({...values, category_name: e.target.value})}
            />
            </>
            <>
            <label htmlFor='title'>Title</label>
            <input
              type="text"
              name='title'
              value={values.title}
              onChange={e=> setValues({...values, title: e.target.value})}
            />
            </>
            <>
            <label htmlFor='description'>Description</label>
            <input
              type="text"
              name='description'
              value={values.description}
              onChange={e=> setValues({...values, description: e.target.value})}
            />
            </>
            <button>Edit</button>
        </form>
    </div>
    </div>
    </div>
  )
}

export default Editcategory