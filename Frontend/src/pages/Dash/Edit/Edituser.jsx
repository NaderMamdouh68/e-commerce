import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './edituser.css'

const Edituser = () => {

  const {id} = useParams();
  const [user, setUser] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:5000/users/userdetails/'+id)
    .then(res =>{
        console.log(res)
        setValues({...values,
          user_name: res.data[0].user_name,
          email: res.data[0].email,
          phonenumber: res.data[0].phonenumber,
          password: res.data[0].password,
        })
    })
    .catch(err => console.log(err))
    
   }, [id]) 

  const [values, setValues] = useState({
    user_name: '',
    email: '',
    password: '',
    phonenumber: '',
  })

  const handleUpdate = (event)=>{
    event.preventDefault()
    axios.put('http://localhost:5000/users/userupdate/'+id, values)
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
              name='user_name'
              value={values.user_name}
              onChange={e=> setValues({...values, user_name: e.target.value})}
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
              value={values.phonenumber}
              onChange={e=> setValues({...values, phonenumber: e.target.value})}
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