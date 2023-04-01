import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './edituser.css'

const Edituser = () => {

  const {id} = useParams();
  const [user, setUser] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get(''+id)
    .then(res =>{
        console.log(res)
        setValues({...values,
          name: res.data[0].name,
          email: res.data[0].email,
          status: res.data[0].status,
          password: res.data[0].password,
          phone: res.data[0].phone,
        })
    })
    .catch(err => console.log(err))
    
   }, [id]) 

  const [values, setValues] = useState({
    name: '',
    email: '',
    status: '',
    password: '',
    phone: '',
  })

  const handleUpdate = (event)=>{
    event.preventDefault()
    axios.put(''+id, values)
    .then(res =>{
      console.log(res);
      navigate('/dashboard/manageUsers')
    }
    )
    .catch (err => console.log(err))
  }

  return (
    <div className='editu'>
          <div className='wrapper'>
        <h2>update User</h2>
        <form onSubmit={handleUpdate}>
            <>
            <label htmlFor='username'>Name</label>
            <input
              type="text"
              name='username'
              value={values.name}
              onChange={e=> setValues({...values, name: e.target.value})}
            />
            </>
            <>
            <label htmlFor='status'>Status</label>
            <input
              type="text"
              name='status'
              value={values.status}
              onChange={e=> setValues({...values, status: e.target.value})}
            />
            </>
            <>
            <label htmlFor='email'>E-mail</label>
            <input
              type="email"
              name='email'
              value={values.email}
              onChange={e=> setValues({...values, email: e.target.value})}
            />
            </>
            <>
            <label htmlFor='phone'>Phone</label>
            <input
              type="text"
              name='phone'
              value={values.phone}
              onChange={e=> setValues({...values, phone: e.target.value})}
            />
            </>
            <>
            <label htmlFor='password'>Password</label>
            <input
              type="password"
              name='password'
              value={values.password}
              onChange={e=> setValues({...values, password: e.target.value})}
            />
            </>
            <button>Edit</button>
        </form>
    </div>
    </div>
  )
}

export default Edituser