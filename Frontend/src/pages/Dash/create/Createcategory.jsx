import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './create.css'
const CreateCategory = () => {

    const [values, setValues] = useState({
        category_name:"",
        title:"",
        description:"",
    })
    const nvigate =useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:5000/categories/categorycreate', values)
        .then(res => {
            console.log(res);
            nvigate('/dashboard/manageCategories')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='wrapper'>
        <h2>Create New Category</h2>
        <form onSubmit={handleSubmit}>
            <>
            <label htmlFor='category_name'>category_name</label>
            <input type="text" name='category_name'
                onChange={e=> setValues({...values, category_name: e.target.value})}
            />
            </>
            <>
            <label htmlFor='title'>title</label>
            <input type="text" name='title'
                onChange={e=> setValues({...values, title: e.target.value})}
            />
            </>
            <>
            <label htmlFor='description'>description</label>
            <input type="text" name='description'
                onChange={e=> setValues({...values, description: e.target.value})}
            />
            </>
            <button>submit</button>
        </form>
    </div>
  )
}

export default CreateCategory