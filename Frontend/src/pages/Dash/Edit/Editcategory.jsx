import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './edituser.css'

const Editcategory = () => {

  const {id} = useParams();
  const [user, setUser] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get(''+id)
    .then(res =>{
        console.log(res)
        setValues({...values,
          name: res.data[0].name,
          title: res.data[0].title,
          description: res.data[0].description,
          
        })
    })
    .catch(err => console.log(err))
    
   }, [id]) 

  const [values, setValues] = useState({
    name: '',
    title: '',
    description: '',
    
  })

  const handleUpdate = (event)=>{
    event.preventDefault()
    axios.put(''+id, values)
    .then(res =>{
      console.log(res);
      navigate('/manageCategories')
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
            <label htmlFor='name'>Name</label>
            <input
              type="text"
              name='name'
              value={values.name}
              onChange={e=> setValues({...values, name: e.target.value})}
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